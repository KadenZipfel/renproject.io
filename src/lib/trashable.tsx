import * as React from "react";
import makeTrashable from "trashable";

type TrashablePromise<T> = Promise<T> & { trash: () => void };

type RegisterPromiseType = <T>(promise: Promise<T>) => TrashablePromise<T>;

export type TrashableReactProps = {
  registerPromise: RegisterPromiseType,
};

interface PromiseStore {
  [key: string]: TrashablePromise<any>;
}

type Key = number;

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/**
 * Subtract
 * @desc From `T` remove properties that exist in `T1` (`T1` is a subtype of `T`)
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type DefaultProps = { age: number };
 *
 *   // Expect: { name: string; visible: boolean; }
 *   type RestProps = Subtract<Props, DefaultProps>;
 */
export type Subtract<T extends T1, T1 extends object> = Pick<
  T,
  SetComplement<keyof T, keyof T1>
>;
/**
 * SetComplement
 * @desc Set complement of given union types `A` and (it's subset) `A1`
 * @example
 *   // Expect: "1"
 *   SetComplement<'1' | '2' | '3', '2' | '3'>;
 */
export type SetComplement<A, A1 extends A> = SetDifference<A, A1>;


/**
 * SetDifference (same as Exclude)
 * @desc Set difference of given union types `A` and `B`
 * @example
 *   // Expect: "1"
 *   SetDifference<'1' | '2' | '3', '2' | '3' | '4'>;
 *
 *   // Expect: string | number
 *   SetDifference<string | number | (() => void), Function>;
 */
export type SetDifference<A, B> = A extends B ? never : A;


export function withTrashable<P extends TrashableReactProps>(WrappedComponent: React.ComponentType<P>) {
  return class TrashableClass extends React.Component<Subtract<P, TrashableReactProps>> {
    constructor(props: any) {
      super(props);
      this.registerPromise = this.registerPromise.bind(this);
    }

    promiseStore: PromiseStore = {};
    key: Key = 0;

    componentWillUnmount() {
      const keys = Object.keys(this.promiseStore);
      keys.forEach(key => {
        this.promiseStore[key].trash();
      });
    }


    addPromise = (promise: TrashablePromise<any>): Key => {
      let currentKey = this.key;
      this.promiseStore[currentKey] = promise;

      this.key++;
      return currentKey;
    };

    removePromise = (key: Key): void => {
      delete this.promiseStore[key];
    };

    registerPromise<T>(promise: Promise<T>): TrashablePromise<T> {
      const trashablePromise = makeTrashable(promise);
      const key = this.addPromise(trashablePromise);

      const handledPromise: TrashablePromise<T> = trashablePromise
        .then((value: T) => {
          this.removePromise(key);
          return Promise.resolve(value);
        })
        .catch((error: any) => {
          this.removePromise(key);
          return Promise.reject(error);
        });

      // Return trashable promise
      handledPromise.trash = () => {
        this.removePromise(key);
        trashablePromise.trash();
      };
      return handledPromise;
    }

    render() {
      return (
        <WrappedComponent registerPromise={this.registerPromise} {...this.props as P} />
      );
    }
  };
}

