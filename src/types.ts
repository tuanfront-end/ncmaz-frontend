import { ListTermsGQLResultData, Users } from "data/gutenbergAttrType";
import { UserViewer } from "data/types";

declare global {
  // ON FAVORITES PLUGIN - NEED UPDATE WHEN UPDATE PLUGIN
  var Favorites:
    | {
        userFavorites?: [
          {
            groups: any;
            posts?: Record<number, any>;
            site_id: number;
          }
        ];
      }
    | undefined;

  //
  var locales: Record<string, Record<string, string>>;

  //
  var DATE_I18N: any;

  //
  var frontendObject: {
    maxTagsLengSubmit?: number;
    maxCategoriesLengSubmit?: number;
    authorPageCoverImgDefault?: string;
    archivePageCoverImgDefault?: string;
    searchPageCoverImgDefault?: string;
    //
    wpLogoutUrl?: string;
    pagePostSubmissionEditorUrl: string;
    pageNcmazAccountUrl: string;
    pll_current_language_correct_code: string | null;
    pll_current_language: string | null;
    pll_themeoption_actived: boolean | null;
    restUrl: string;
    ajaxurl: string;
    stylesheetDirectory: string;
    placeholderImg: string;
    graphQLBasePath: string;
    homeURL: string;
    currentUser?: UserViewer;
    currentObject: {
      id: number;
    };
    musicPlayerMediaSource?: ("html5" | "youtube" | "other")[];
    musicPlayerMode?: boolean;
    socialsShare: string[];
    allSettings?: {
      discussionSettingsDefaultCommentStatus: string;
      discussionSettingsDefaultPingStatus: string;
      generalSettingsDateFormat: string;
      generalSettingsDescription: string;
      generalSettingsLanguage: string;
      generalSettingsStartOfWeek: number;
      generalSettingsTimeFormat: string;
      generalSettingsTimezone: string;
      generalSettingsTitle: string;
      readingSettingsPostsPerPage: number;
      writingSettingsDefaultCategory: number;
      writingSettingsDefaultPostFormat: string;
      writingSettingsUseSmilies: boolean;
    };
    restVarsEndpoint: string;
    restVarsNonce: string;
    switchPreviewVideo?: boolean;
    //
    frontendTranslations?: {
      name?: string;
      language?: string;
      jsCode?: string;
    }[];
    //
    isActivePluginFavorites?: boolean;
  };

  //
  var ncmazFrontendVariables: {
    pluginDir: string;
    pluginDistImagesDir: string;
  };

  //
  var ncmazCoreVariables:
    | {
        // ncmazCoreInitPosts: Record<number, Users['edges'][number]['node']>;
        ncmazCoreInitPosts: Record<number, any>;
        ncmazCoreInitTerms: Record<number, any>;
        ncmazCoreInitUsers: Record<number, any>;
      }
    | undefined;
}

export default null;
