import type {
  SiteSettings,
  Project,
  WritingArticle,
  MediaAsset,
  ContactSubmission,
  AdminUser,
  ContactCtaType,
  DarkModeDefault,
  ProjectStatus,
} from "@prisma/client";

export type {
  SiteSettings,
  Project,
  WritingArticle,
  MediaAsset,
  ContactSubmission,
  AdminUser,
  ContactCtaType,
  DarkModeDefault,
  ProjectStatus,
};

// Extended types with relations
export type ProjectWithRelations = Project & {
  thumbnail: MediaAsset;
  heroImage: MediaAsset;
  gallery: MediaAsset[];
};

export type WritingArticleWithRelations = WritingArticle & {
  thumbnail: MediaAsset;
};

export type SiteSettingsWithRelations = SiteSettings & {
  turnMomentAsset: MediaAsset | null;
};
