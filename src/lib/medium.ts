import axios from "axios";

const MEDIUM_FEED_URL = "https://medium-article-feed.herokuapp.com";

export interface MediumPost {
    id: string;
    versionId: string;
    creatorId: string;
    homeCollectionId: string;
    title: string;
    detectedLanguage: string;
    latestVersion: string;
    latestPublishedVersion: string;
    hasUnpublishedEdits: boolean;
    latestRev: number;
    createdAt: number;
    updatedAt: number;
    acceptedAt: number;
    firstPublishedAt: number;
    latestPublishedAt: number;
    vote: boolean;
    experimentalCss: string;
    displayAuthor: string;
    virtuals: {
        statusForCollection: string;
        allowNotes: true;
        previewImage: {
            imageId: string;
            filter: string;
            backgroundSize: string;
            originalWidth: number;
            originalHeight: number;
            strategy: string;
            height: number;
            width: number;
        };
        wordCount: number;
        imageCount: number;
        readingTime: number;
        subtitle: string;
        publishedInCount: number;
        usersBySocialRecommends: any[];
        noIndex: boolean;
        recommends: number;
        isBookmarked: boolean;
        tags: [
            {
                slug: string;
                name: string;
                postCount: number;
                metadata: {
                    postCount: number;
                    coverImage: {
                        id: string;
                        originalWidth: number;
                        originalHeight: number;
                        isFeatured: boolean;
                    }
                };
                type: string;
            }
        ];
        socialRecommendsCount: number;
        responsesCreatedCount: number;
        links: {
            entries: [
                {
                    url: string;
                    alts: [
                        {
                            type: number;
                            url: string;
                        }
                    ];
                    httpStatus: number;
                }
            ];
            version: string;
            generatedAt: number;
        };
        isLockedPreviewOnly: boolean;
        takeoverId: string;
        metaDescription: string;
        totalClapCount: number;
        sectionCount: number;
        readingList: number;
        topics: any[];
    };
    coverless: boolean;
    slug: string;
    translationSourcePostId: string;
    translationSourceCreatorId: string;
    isApprovedTranslation: boolean;
    inResponseToPostId: string;
    inResponseToRemovedAt: number;
    isTitleSynthesized: boolean;
    allowResponses: boolean;
    importedUrl: string;
    importedPublishedAt: number;
    visibility: number;
    uniqueSlug: string;
    previewContent: {
        bodyModel: {
            paragraphs: [
                {
                    name: string;
                    type: number;
                    text: string;
                    layout?: number;
                    metadata?: {
                        id: string;
                        originalWidth: number;
                        originalHeight: number;
                        isFeatured: boolean;
                    };
                    alignment?: number;
                    markups?: [
                        {
                            type: number;
                            start: number;
                            end: number;
                            href: string;
                            title: string;
                            rel: string;
                            anchorType: number;
                        }
                    ];
                }
            ];
            sections: [
                {
                    startIndex: number;
                }
            ];
        };
        isFullContent: boolean;
        subtitle: string;
    };
    license: number;
    inResponseToMediaResourceId: string;
    canonicalUrl: string;
    approvedHomeCollectionId: string;
    newsletterId: string;
    webCanonicalUrl: string;
    mediumUrl: string;
    migrationId: string;
    notifyFollowers: boolean;
    notifyTwitter: boolean;
    notifyFacebook: boolean;
    responseHiddenOnParentPostAt: number;
    isSeries: boolean;
    isSubscriptionLocked: boolean;
    seriesLastAppendedAt: number;
    audioVersionDurationSec: number;
    sequenceId: string;
    isNsfw: boolean;
    isEligibleForRevenue: boolean;
    isBlockedFromHightower: boolean;
    deletedAt: number;
    lockedPostSource: number;
    hightowerMinimumGuaranteeStartsAt: number;
    hightowerMinimumGuaranteeEndsAt: number;
    featureLockRequestAcceptedAt: number;
    mongerRequestType: number;
    layerCake: number;
    socialTitle: string;
    socialDek: string;
    editorialPreviewTitle: string;
    editorialPreviewDek: string;
    curationEligibleAt: number;
    type: string;
}


export const fetchMediumPosts = async (mediumName: string): Promise<MediumPost[]> => {
    const feedurl = `${MEDIUM_FEED_URL}/${mediumName}/latest`;
    const resp = await axios.get(feedurl);
    return resp.data.response as MediumPost[];
}
