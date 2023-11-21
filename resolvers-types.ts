import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type App = {
  __typename?: 'App';
  box?: Maybe<Array<Maybe<ComponentComApplication>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AppBoxArgs = {
  filters?: InputMaybe<ComponentComApplicationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AppEntity = {
  __typename?: 'AppEntity';
  attributes?: Maybe<App>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AppEntityResponse = {
  __typename?: 'AppEntityResponse';
  data?: Maybe<AppEntity>;
};

export type AppInput = {
  box?: InputMaybe<Array<InputMaybe<ComponentComApplicationInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  posts?: Maybe<PostRelationResponseCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ComponentComApplication = {
  __typename?: 'ComponentComApplication';
  contents?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentComApplicationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComApplicationFiltersInput>>>;
  contents?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentComApplicationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComApplicationFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentComApplicationInput = {
  contents?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentParagraphMdx = {
  __typename?: 'ComponentParagraphMdx';
  collapsed?: Maybe<Scalars['Boolean']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  subject?: Maybe<Scalars['String']['output']>;
};

export type ComponentParagraphMdxFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentParagraphMdxFiltersInput>>>;
  collapsed?: InputMaybe<BooleanFilterInput>;
  details?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentParagraphMdxFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentParagraphMdxFiltersInput>>>;
  subject?: InputMaybe<StringFilterInput>;
};

export type ComponentParagraphMdxInput = {
  collapsed?: InputMaybe<Scalars['Boolean']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPeriodPeriod = {
  __typename?: 'ComponentPeriodPeriod';
  end?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  replace?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['Date']['output']>;
};

export type ComponentPeriodWorkPeriod = {
  __typename?: 'ComponentPeriodWorkPeriod';
  end?: Maybe<Scalars['Date']['output']>;
  end_replace?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  start?: Maybe<Scalars['Date']['output']>;
};

export type ComponentUrlLinks = {
  __typename?: 'ComponentUrlLinks';
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type ComponentUrlLinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUrlLinksFiltersInput>>>;
  not?: InputMaybe<ComponentUrlLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUrlLinksFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentUrlLinksInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Group_Type {
  Numbering = 'numbering',
  Recent = 'recent'
}

export enum Enum_Sitemapsitemap_Type {
  DefaultHreflang = 'default_hreflang',
  Index = 'index'
}

export enum Enum_Workcategory_Type {
  Company = 'company',
  Outsourcing = 'outsourcing',
  Personal = 'personal'
}

export enum Enum_Work_Type {
  Company = 'company',
  Outsourcing = 'outsourcing',
  Personal = 'personal'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = App | Category | ComponentComApplication | ComponentParagraphMdx | ComponentPeriodPeriod | ComponentPeriodWorkPeriod | ComponentUrlLinks | Group | I18NLocale | Post | Profile | SitemapSitemap | SitemapSitemapCache | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Work | WorkCategory;

export type Group = {
  __typename?: 'Group';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<PostRelationResponseCollection>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title: Scalars['String']['output'];
  type: Enum_Group_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type GroupPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GroupEntity = {
  __typename?: 'GroupEntity';
  attributes?: Maybe<Group>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GroupEntityResponse = {
  __typename?: 'GroupEntityResponse';
  data?: Maybe<GroupEntity>;
};

export type GroupEntityResponseCollection = {
  __typename?: 'GroupEntityResponseCollection';
  data: Array<GroupEntity>;
  meta: ResponseCollectionMeta;
};

export type GroupFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GroupFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<GroupFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GroupFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Group_Type>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createGroup?: Maybe<GroupEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createSitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  createSitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWork?: Maybe<WorkEntityResponse>;
  createWorkCategory?: Maybe<WorkCategoryEntityResponse>;
  deleteApp?: Maybe<AppEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteGroup?: Maybe<GroupEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deleteProfile?: Maybe<ProfileEntityResponse>;
  deleteSitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  deleteSitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWork?: Maybe<WorkEntityResponse>;
  deleteWorkCategory?: Maybe<WorkCategoryEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateApp?: Maybe<AppEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGroup?: Maybe<GroupEntityResponse>;
  updatePost?: Maybe<PostEntityResponse>;
  updateProfile?: Maybe<ProfileEntityResponse>;
  updateSitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  updateSitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWork?: Maybe<WorkEntityResponse>;
  updateWorkCategory?: Maybe<WorkCategoryEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateGroupArgs = {
  data: GroupInput;
};


export type MutationCreatePostArgs = {
  data: PostInput;
};


export type MutationCreateSitemapSitemapArgs = {
  data: SitemapSitemapInput;
};


export type MutationCreateSitemapSitemapCacheArgs = {
  data: SitemapSitemapCacheInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWorkArgs = {
  data: WorkInput;
};


export type MutationCreateWorkCategoryArgs = {
  data: WorkCategoryInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSitemapSitemapArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSitemapSitemapCacheArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWorkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWorkCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAppArgs = {
  data: AppInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGroupArgs = {
  data: GroupInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProfileArgs = {
  data: ProfileInput;
};


export type MutationUpdateSitemapSitemapArgs = {
  data: SitemapSitemapInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSitemapSitemapCacheArgs = {
  data: SitemapSitemapCacheInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWorkArgs = {
  data: WorkInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWorkCategoryArgs = {
  data: WorkCategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Post = {
  __typename?: 'Post';
  categories?: Maybe<CategoryRelationResponseCollection>;
  contents: Array<Maybe<ComponentParagraphMdx>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  groups?: Maybe<GroupEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostContentsArgs = {
  filters?: InputMaybe<ComponentParagraphMdxFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostEntity = {
  __typename?: 'PostEntity';
  attributes?: Maybe<Post>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PostEntityResponse = {
  __typename?: 'PostEntityResponse';
  data?: Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  data: Array<PostEntity>;
  meta: ResponseCollectionMeta;
};

export type PostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  contents?: InputMaybe<ComponentParagraphMdxFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  groups?: InputMaybe<GroupFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  summary?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contents?: InputMaybe<Array<InputMaybe<ComponentParagraphMdxInput>>>;
  groups?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  data: Array<PostEntity>;
};

export type Profile = {
  __typename?: 'Profile';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  specialty?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProfileEntity = {
  __typename?: 'ProfileEntity';
  attributes?: Maybe<Profile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProfileEntityResponse = {
  __typename?: 'ProfileEntityResponse';
  data?: Maybe<ProfileEntity>;
};

export type ProfileInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  specialty?: InputMaybe<Scalars['String']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  app?: Maybe<AppEntityResponse>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  group?: Maybe<GroupEntityResponse>;
  groups?: Maybe<GroupEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  post?: Maybe<PostEntityResponse>;
  posts?: Maybe<PostEntityResponseCollection>;
  profile?: Maybe<ProfileEntityResponse>;
  sitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  sitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  sitemapSitemapCaches?: Maybe<SitemapSitemapCacheEntityResponseCollection>;
  sitemapSitemaps?: Maybe<SitemapSitemapEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  work?: Maybe<WorkEntityResponse>;
  workCategories?: Maybe<WorkCategoryEntityResponseCollection>;
  workCategory?: Maybe<WorkCategoryEntityResponse>;
  works?: Maybe<WorkEntityResponseCollection>;
};


export type QueryAppArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGroupArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGroupsArgs = {
  filters?: InputMaybe<GroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProfileArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySitemapSitemapArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySitemapSitemapCacheArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySitemapSitemapCachesArgs = {
  filters?: InputMaybe<SitemapSitemapCacheFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySitemapSitemapsArgs = {
  filters?: InputMaybe<SitemapSitemapFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWorkArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWorkCategoriesArgs = {
  filters?: InputMaybe<WorkCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWorkCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWorksArgs = {
  filters?: InputMaybe<WorkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SitemapSitemap = {
  __typename?: 'SitemapSitemap';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  delta?: Maybe<Scalars['Int']['output']>;
  link_count?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  sitemap_string: Scalars['String']['output'];
  type?: Maybe<Enum_Sitemapsitemap_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SitemapSitemapCache = {
  __typename?: 'SitemapSitemapCache';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  sitemap_id: Scalars['Int']['output'];
  sitemap_json: Scalars['JSON']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SitemapSitemapCacheEntity = {
  __typename?: 'SitemapSitemapCacheEntity';
  attributes?: Maybe<SitemapSitemapCache>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SitemapSitemapCacheEntityResponse = {
  __typename?: 'SitemapSitemapCacheEntityResponse';
  data?: Maybe<SitemapSitemapCacheEntity>;
};

export type SitemapSitemapCacheEntityResponseCollection = {
  __typename?: 'SitemapSitemapCacheEntityResponseCollection';
  data: Array<SitemapSitemapCacheEntity>;
  meta: ResponseCollectionMeta;
};

export type SitemapSitemapCacheFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SitemapSitemapCacheFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SitemapSitemapCacheFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SitemapSitemapCacheFiltersInput>>>;
  sitemap_id?: InputMaybe<IntFilterInput>;
  sitemap_json?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SitemapSitemapCacheInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  sitemap_id?: InputMaybe<Scalars['Int']['input']>;
  sitemap_json?: InputMaybe<Scalars['JSON']['input']>;
};

export type SitemapSitemapEntity = {
  __typename?: 'SitemapSitemapEntity';
  attributes?: Maybe<SitemapSitemap>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SitemapSitemapEntityResponse = {
  __typename?: 'SitemapSitemapEntityResponse';
  data?: Maybe<SitemapSitemapEntity>;
};

export type SitemapSitemapEntityResponseCollection = {
  __typename?: 'SitemapSitemapEntityResponseCollection';
  data: Array<SitemapSitemapEntity>;
  meta: ResponseCollectionMeta;
};

export type SitemapSitemapFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SitemapSitemapFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  delta?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  link_count?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SitemapSitemapFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SitemapSitemapFiltersInput>>>;
  sitemap_string?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SitemapSitemapInput = {
  delta?: InputMaybe<Scalars['Int']['input']>;
  link_count?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sitemap_string?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Sitemapsitemap_Type>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Work = {
  __typename?: 'Work';
  contents?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  end?: Maybe<Scalars['Date']['output']>;
  end_replace?: Maybe<Scalars['String']['output']>;
  links?: Maybe<Array<Maybe<ComponentUrlLinks>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  retrospective?: Maybe<Scalars['String']['output']>;
  stack?: Maybe<Scalars['JSON']['output']>;
  start: Scalars['Date']['output'];
  sub_title?: Maybe<Scalars['String']['output']>;
  thumbnails?: Maybe<UploadFileRelationResponseCollection>;
  title: Scalars['String']['output'];
  type?: Maybe<Enum_Work_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  work_category?: Maybe<WorkCategoryEntityResponse>;
  work_summary?: Maybe<Scalars['String']['output']>;
};


export type WorkLinksArgs = {
  filters?: InputMaybe<ComponentUrlLinksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WorkThumbnailsArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WorkCategory = {
  __typename?: 'WorkCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['Date']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  start: Scalars['Date']['output'];
  title_id: Scalars['String']['output'];
  type: Enum_Workcategory_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  works?: Maybe<WorkRelationResponseCollection>;
};


export type WorkCategoryWorksArgs = {
  filters?: InputMaybe<WorkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WorkCategoryEntity = {
  __typename?: 'WorkCategoryEntity';
  attributes?: Maybe<WorkCategory>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WorkCategoryEntityResponse = {
  __typename?: 'WorkCategoryEntityResponse';
  data?: Maybe<WorkCategoryEntity>;
};

export type WorkCategoryEntityResponseCollection = {
  __typename?: 'WorkCategoryEntityResponseCollection';
  data: Array<WorkCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type WorkCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WorkCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  end?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WorkCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WorkCategoryFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  start?: InputMaybe<DateFilterInput>;
  title_id?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  works?: InputMaybe<WorkFiltersInput>;
};

export type WorkCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  end?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
  title_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Workcategory_Type>;
  works?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type WorkEntity = {
  __typename?: 'WorkEntity';
  attributes?: Maybe<Work>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WorkEntityResponse = {
  __typename?: 'WorkEntityResponse';
  data?: Maybe<WorkEntity>;
};

export type WorkEntityResponseCollection = {
  __typename?: 'WorkEntityResponseCollection';
  data: Array<WorkEntity>;
  meta: ResponseCollectionMeta;
};

export type WorkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WorkFiltersInput>>>;
  contents?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  end?: InputMaybe<DateFilterInput>;
  end_replace?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  links?: InputMaybe<ComponentUrlLinksFiltersInput>;
  not?: InputMaybe<WorkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WorkFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  retrospective?: InputMaybe<StringFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  stack?: InputMaybe<JsonFilterInput>;
  start?: InputMaybe<DateFilterInput>;
  sub_title?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  work_category?: InputMaybe<WorkCategoryFiltersInput>;
  work_summary?: InputMaybe<StringFilterInput>;
};

export type WorkInput = {
  contents?: InputMaybe<Scalars['String']['input']>;
  end?: InputMaybe<Scalars['Date']['input']>;
  end_replace?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<Array<InputMaybe<ComponentUrlLinksInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  retrospective?: InputMaybe<Scalars['String']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  stack?: InputMaybe<Scalars['JSON']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
  sub_title?: InputMaybe<Scalars['String']['input']>;
  thumbnails?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Work_Type>;
  work_category?: InputMaybe<Scalars['ID']['input']>;
  work_summary?: InputMaybe<Scalars['String']['input']>;
};

export type WorkRelationResponseCollection = {
  __typename?: 'WorkRelationResponseCollection';
  data: Array<WorkEntity>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  GenericMorph: ( App ) | ( Category ) | ( ComponentComApplication ) | ( ComponentParagraphMdx ) | ( ComponentPeriodPeriod ) | ( ComponentPeriodWorkPeriod ) | ( ComponentUrlLinks ) | ( Group ) | ( I18NLocale ) | ( Post ) | ( Profile ) | ( SitemapSitemap ) | ( SitemapSitemapCache ) | ( Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<RefType['GenericMorph']>>> } ) | ( UploadFolder ) | ( UsersPermissionsPermission ) | ( UsersPermissionsRole ) | ( UsersPermissionsUser ) | ( Work ) | ( WorkCategory );
}>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  App: ResolverTypeWrapper<App>;
  AppEntity: ResolverTypeWrapper<AppEntity>;
  AppEntityResponse: ResolverTypeWrapper<AppEntityResponse>;
  AppInput: AppInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BooleanFilterInput: BooleanFilterInput;
  Category: ResolverTypeWrapper<Category>;
  CategoryEntity: ResolverTypeWrapper<CategoryEntity>;
  CategoryEntityResponse: ResolverTypeWrapper<CategoryEntityResponse>;
  CategoryEntityResponseCollection: ResolverTypeWrapper<CategoryEntityResponseCollection>;
  CategoryFiltersInput: CategoryFiltersInput;
  CategoryInput: CategoryInput;
  CategoryRelationResponseCollection: ResolverTypeWrapper<CategoryRelationResponseCollection>;
  ComponentComApplication: ResolverTypeWrapper<ComponentComApplication>;
  ComponentComApplicationFiltersInput: ComponentComApplicationFiltersInput;
  ComponentComApplicationInput: ComponentComApplicationInput;
  ComponentParagraphMdx: ResolverTypeWrapper<ComponentParagraphMdx>;
  ComponentParagraphMdxFiltersInput: ComponentParagraphMdxFiltersInput;
  ComponentParagraphMdxInput: ComponentParagraphMdxInput;
  ComponentPeriodPeriod: ResolverTypeWrapper<ComponentPeriodPeriod>;
  ComponentPeriodWorkPeriod: ResolverTypeWrapper<ComponentPeriodWorkPeriod>;
  ComponentUrlLinks: ResolverTypeWrapper<ComponentUrlLinks>;
  ComponentUrlLinksFiltersInput: ComponentUrlLinksFiltersInput;
  ComponentUrlLinksInput: ComponentUrlLinksInput;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateFilterInput: DateFilterInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeFilterInput: DateTimeFilterInput;
  ENUM_GROUP_TYPE: Enum_Group_Type;
  ENUM_SITEMAPSITEMAP_TYPE: Enum_Sitemapsitemap_Type;
  ENUM_WORKCATEGORY_TYPE: Enum_Workcategory_Type;
  ENUM_WORK_TYPE: Enum_Work_Type;
  FileInfoInput: FileInfoInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FloatFilterInput: FloatFilterInput;
  GenericMorph: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['GenericMorph']>;
  Group: ResolverTypeWrapper<Group>;
  GroupEntity: ResolverTypeWrapper<GroupEntity>;
  GroupEntityResponse: ResolverTypeWrapper<GroupEntityResponse>;
  GroupEntityResponseCollection: ResolverTypeWrapper<GroupEntityResponseCollection>;
  GroupFiltersInput: GroupFiltersInput;
  GroupInput: GroupInput;
  I18NLocale: ResolverTypeWrapper<I18NLocale>;
  I18NLocaleEntity: ResolverTypeWrapper<I18NLocaleEntity>;
  I18NLocaleEntityResponse: ResolverTypeWrapper<I18NLocaleEntityResponse>;
  I18NLocaleEntityResponseCollection: ResolverTypeWrapper<I18NLocaleEntityResponseCollection>;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IDFilterInput: IdFilterInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntFilterInput: IntFilterInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JSONFilterInput: JsonFilterInput;
  Mutation: ResolverTypeWrapper<{}>;
  Pagination: ResolverTypeWrapper<Pagination>;
  PaginationArg: PaginationArg;
  Post: ResolverTypeWrapper<Post>;
  PostEntity: ResolverTypeWrapper<PostEntity>;
  PostEntityResponse: ResolverTypeWrapper<PostEntityResponse>;
  PostEntityResponseCollection: ResolverTypeWrapper<PostEntityResponseCollection>;
  PostFiltersInput: PostFiltersInput;
  PostInput: PostInput;
  PostRelationResponseCollection: ResolverTypeWrapper<PostRelationResponseCollection>;
  Profile: ResolverTypeWrapper<Profile>;
  ProfileEntity: ResolverTypeWrapper<ProfileEntity>;
  ProfileEntityResponse: ResolverTypeWrapper<ProfileEntityResponse>;
  ProfileInput: ProfileInput;
  PublicationState: PublicationState;
  Query: ResolverTypeWrapper<{}>;
  ResponseCollectionMeta: ResolverTypeWrapper<ResponseCollectionMeta>;
  SitemapSitemap: ResolverTypeWrapper<SitemapSitemap>;
  SitemapSitemapCache: ResolverTypeWrapper<SitemapSitemapCache>;
  SitemapSitemapCacheEntity: ResolverTypeWrapper<SitemapSitemapCacheEntity>;
  SitemapSitemapCacheEntityResponse: ResolverTypeWrapper<SitemapSitemapCacheEntityResponse>;
  SitemapSitemapCacheEntityResponseCollection: ResolverTypeWrapper<SitemapSitemapCacheEntityResponseCollection>;
  SitemapSitemapCacheFiltersInput: SitemapSitemapCacheFiltersInput;
  SitemapSitemapCacheInput: SitemapSitemapCacheInput;
  SitemapSitemapEntity: ResolverTypeWrapper<SitemapSitemapEntity>;
  SitemapSitemapEntityResponse: ResolverTypeWrapper<SitemapSitemapEntityResponse>;
  SitemapSitemapEntityResponseCollection: ResolverTypeWrapper<SitemapSitemapEntityResponseCollection>;
  SitemapSitemapFiltersInput: SitemapSitemapFiltersInput;
  SitemapSitemapInput: SitemapSitemapInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFilterInput: StringFilterInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  UploadFile: ResolverTypeWrapper<Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>> }>;
  UploadFileEntity: ResolverTypeWrapper<UploadFileEntity>;
  UploadFileEntityResponse: ResolverTypeWrapper<UploadFileEntityResponse>;
  UploadFileEntityResponseCollection: ResolverTypeWrapper<UploadFileEntityResponseCollection>;
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileInput: UploadFileInput;
  UploadFileRelationResponseCollection: ResolverTypeWrapper<UploadFileRelationResponseCollection>;
  UploadFolder: ResolverTypeWrapper<UploadFolder>;
  UploadFolderEntity: ResolverTypeWrapper<UploadFolderEntity>;
  UploadFolderEntityResponse: ResolverTypeWrapper<UploadFolderEntityResponse>;
  UploadFolderEntityResponseCollection: ResolverTypeWrapper<UploadFolderEntityResponseCollection>;
  UploadFolderFiltersInput: UploadFolderFiltersInput;
  UploadFolderInput: UploadFolderInput;
  UploadFolderRelationResponseCollection: ResolverTypeWrapper<UploadFolderRelationResponseCollection>;
  UsersPermissionsCreateRolePayload: ResolverTypeWrapper<UsersPermissionsCreateRolePayload>;
  UsersPermissionsDeleteRolePayload: ResolverTypeWrapper<UsersPermissionsDeleteRolePayload>;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: ResolverTypeWrapper<UsersPermissionsLoginPayload>;
  UsersPermissionsMe: ResolverTypeWrapper<UsersPermissionsMe>;
  UsersPermissionsMeRole: ResolverTypeWrapper<UsersPermissionsMeRole>;
  UsersPermissionsPasswordPayload: ResolverTypeWrapper<UsersPermissionsPasswordPayload>;
  UsersPermissionsPermission: ResolverTypeWrapper<UsersPermissionsPermission>;
  UsersPermissionsPermissionEntity: ResolverTypeWrapper<UsersPermissionsPermissionEntity>;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsPermissionRelationResponseCollection>;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: ResolverTypeWrapper<UsersPermissionsRole>;
  UsersPermissionsRoleEntity: ResolverTypeWrapper<UsersPermissionsRoleEntity>;
  UsersPermissionsRoleEntityResponse: ResolverTypeWrapper<UsersPermissionsRoleEntityResponse>;
  UsersPermissionsRoleEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsRoleEntityResponseCollection>;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsUpdateRolePayload: ResolverTypeWrapper<UsersPermissionsUpdateRolePayload>;
  UsersPermissionsUser: ResolverTypeWrapper<UsersPermissionsUser>;
  UsersPermissionsUserEntity: ResolverTypeWrapper<UsersPermissionsUserEntity>;
  UsersPermissionsUserEntityResponse: ResolverTypeWrapper<UsersPermissionsUserEntityResponse>;
  UsersPermissionsUserEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsUserEntityResponseCollection>;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsUserRelationResponseCollection>;
  Work: ResolverTypeWrapper<Work>;
  WorkCategory: ResolverTypeWrapper<WorkCategory>;
  WorkCategoryEntity: ResolverTypeWrapper<WorkCategoryEntity>;
  WorkCategoryEntityResponse: ResolverTypeWrapper<WorkCategoryEntityResponse>;
  WorkCategoryEntityResponseCollection: ResolverTypeWrapper<WorkCategoryEntityResponseCollection>;
  WorkCategoryFiltersInput: WorkCategoryFiltersInput;
  WorkCategoryInput: WorkCategoryInput;
  WorkEntity: ResolverTypeWrapper<WorkEntity>;
  WorkEntityResponse: ResolverTypeWrapper<WorkEntityResponse>;
  WorkEntityResponseCollection: ResolverTypeWrapper<WorkEntityResponseCollection>;
  WorkFiltersInput: WorkFiltersInput;
  WorkInput: WorkInput;
  WorkRelationResponseCollection: ResolverTypeWrapper<WorkRelationResponseCollection>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  App: App;
  AppEntity: AppEntity;
  AppEntityResponse: AppEntityResponse;
  AppInput: AppInput;
  Boolean: Scalars['Boolean']['output'];
  BooleanFilterInput: BooleanFilterInput;
  Category: Category;
  CategoryEntity: CategoryEntity;
  CategoryEntityResponse: CategoryEntityResponse;
  CategoryEntityResponseCollection: CategoryEntityResponseCollection;
  CategoryFiltersInput: CategoryFiltersInput;
  CategoryInput: CategoryInput;
  CategoryRelationResponseCollection: CategoryRelationResponseCollection;
  ComponentComApplication: ComponentComApplication;
  ComponentComApplicationFiltersInput: ComponentComApplicationFiltersInput;
  ComponentComApplicationInput: ComponentComApplicationInput;
  ComponentParagraphMdx: ComponentParagraphMdx;
  ComponentParagraphMdxFiltersInput: ComponentParagraphMdxFiltersInput;
  ComponentParagraphMdxInput: ComponentParagraphMdxInput;
  ComponentPeriodPeriod: ComponentPeriodPeriod;
  ComponentPeriodWorkPeriod: ComponentPeriodWorkPeriod;
  ComponentUrlLinks: ComponentUrlLinks;
  ComponentUrlLinksFiltersInput: ComponentUrlLinksFiltersInput;
  ComponentUrlLinksInput: ComponentUrlLinksInput;
  Date: Scalars['Date']['output'];
  DateFilterInput: DateFilterInput;
  DateTime: Scalars['DateTime']['output'];
  DateTimeFilterInput: DateTimeFilterInput;
  FileInfoInput: FileInfoInput;
  Float: Scalars['Float']['output'];
  FloatFilterInput: FloatFilterInput;
  GenericMorph: ResolversUnionTypes<ResolversParentTypes>['GenericMorph'];
  Group: Group;
  GroupEntity: GroupEntity;
  GroupEntityResponse: GroupEntityResponse;
  GroupEntityResponseCollection: GroupEntityResponseCollection;
  GroupFiltersInput: GroupFiltersInput;
  GroupInput: GroupInput;
  I18NLocale: I18NLocale;
  I18NLocaleEntity: I18NLocaleEntity;
  I18NLocaleEntityResponse: I18NLocaleEntityResponse;
  I18NLocaleEntityResponseCollection: I18NLocaleEntityResponseCollection;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  ID: Scalars['ID']['output'];
  IDFilterInput: IdFilterInput;
  Int: Scalars['Int']['output'];
  IntFilterInput: IntFilterInput;
  JSON: Scalars['JSON']['output'];
  JSONFilterInput: JsonFilterInput;
  Mutation: {};
  Pagination: Pagination;
  PaginationArg: PaginationArg;
  Post: Post;
  PostEntity: PostEntity;
  PostEntityResponse: PostEntityResponse;
  PostEntityResponseCollection: PostEntityResponseCollection;
  PostFiltersInput: PostFiltersInput;
  PostInput: PostInput;
  PostRelationResponseCollection: PostRelationResponseCollection;
  Profile: Profile;
  ProfileEntity: ProfileEntity;
  ProfileEntityResponse: ProfileEntityResponse;
  ProfileInput: ProfileInput;
  Query: {};
  ResponseCollectionMeta: ResponseCollectionMeta;
  SitemapSitemap: SitemapSitemap;
  SitemapSitemapCache: SitemapSitemapCache;
  SitemapSitemapCacheEntity: SitemapSitemapCacheEntity;
  SitemapSitemapCacheEntityResponse: SitemapSitemapCacheEntityResponse;
  SitemapSitemapCacheEntityResponseCollection: SitemapSitemapCacheEntityResponseCollection;
  SitemapSitemapCacheFiltersInput: SitemapSitemapCacheFiltersInput;
  SitemapSitemapCacheInput: SitemapSitemapCacheInput;
  SitemapSitemapEntity: SitemapSitemapEntity;
  SitemapSitemapEntityResponse: SitemapSitemapEntityResponse;
  SitemapSitemapEntityResponseCollection: SitemapSitemapEntityResponseCollection;
  SitemapSitemapFiltersInput: SitemapSitemapFiltersInput;
  SitemapSitemapInput: SitemapSitemapInput;
  String: Scalars['String']['output'];
  StringFilterInput: StringFilterInput;
  Upload: Scalars['Upload']['output'];
  UploadFile: Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversParentTypes['GenericMorph']>>> };
  UploadFileEntity: UploadFileEntity;
  UploadFileEntityResponse: UploadFileEntityResponse;
  UploadFileEntityResponseCollection: UploadFileEntityResponseCollection;
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileInput: UploadFileInput;
  UploadFileRelationResponseCollection: UploadFileRelationResponseCollection;
  UploadFolder: UploadFolder;
  UploadFolderEntity: UploadFolderEntity;
  UploadFolderEntityResponse: UploadFolderEntityResponse;
  UploadFolderEntityResponseCollection: UploadFolderEntityResponseCollection;
  UploadFolderFiltersInput: UploadFolderFiltersInput;
  UploadFolderInput: UploadFolderInput;
  UploadFolderRelationResponseCollection: UploadFolderRelationResponseCollection;
  UsersPermissionsCreateRolePayload: UsersPermissionsCreateRolePayload;
  UsersPermissionsDeleteRolePayload: UsersPermissionsDeleteRolePayload;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: UsersPermissionsLoginPayload;
  UsersPermissionsMe: UsersPermissionsMe;
  UsersPermissionsMeRole: UsersPermissionsMeRole;
  UsersPermissionsPasswordPayload: UsersPermissionsPasswordPayload;
  UsersPermissionsPermission: UsersPermissionsPermission;
  UsersPermissionsPermissionEntity: UsersPermissionsPermissionEntity;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: UsersPermissionsPermissionRelationResponseCollection;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: UsersPermissionsRole;
  UsersPermissionsRoleEntity: UsersPermissionsRoleEntity;
  UsersPermissionsRoleEntityResponse: UsersPermissionsRoleEntityResponse;
  UsersPermissionsRoleEntityResponseCollection: UsersPermissionsRoleEntityResponseCollection;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsUpdateRolePayload: UsersPermissionsUpdateRolePayload;
  UsersPermissionsUser: UsersPermissionsUser;
  UsersPermissionsUserEntity: UsersPermissionsUserEntity;
  UsersPermissionsUserEntityResponse: UsersPermissionsUserEntityResponse;
  UsersPermissionsUserEntityResponseCollection: UsersPermissionsUserEntityResponseCollection;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: UsersPermissionsUserRelationResponseCollection;
  Work: Work;
  WorkCategory: WorkCategory;
  WorkCategoryEntity: WorkCategoryEntity;
  WorkCategoryEntityResponse: WorkCategoryEntityResponse;
  WorkCategoryEntityResponseCollection: WorkCategoryEntityResponseCollection;
  WorkCategoryFiltersInput: WorkCategoryFiltersInput;
  WorkCategoryInput: WorkCategoryInput;
  WorkEntity: WorkEntity;
  WorkEntityResponse: WorkEntityResponse;
  WorkEntityResponseCollection: WorkEntityResponseCollection;
  WorkFiltersInput: WorkFiltersInput;
  WorkInput: WorkInput;
  WorkRelationResponseCollection: WorkRelationResponseCollection;
}>;

export type AppResolvers<ContextType = any, ParentType extends ResolversParentTypes['App'] = ResolversParentTypes['App']> = ResolversObject<{
  box?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComponentComApplication']>>>, ParentType, ContextType, RequireFields<AppBoxArgs, 'pagination' | 'sort'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AppEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppEntity'] = ResolversParentTypes['AppEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['App']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AppEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppEntityResponse'] = ResolversParentTypes['AppEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['AppEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<Maybe<ResolversTypes['PostRelationResponseCollection']>, ParentType, ContextType, RequireFields<CategoryPostsArgs, 'pagination' | 'publicationState' | 'sort'>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryEntity'] = ResolversParentTypes['CategoryEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryEntityResponse'] = ResolversParentTypes['CategoryEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['CategoryEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryEntityResponseCollection'] = ResolversParentTypes['CategoryEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['CategoryEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryRelationResponseCollection'] = ResolversParentTypes['CategoryRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['CategoryEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComponentComApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentComApplication'] = ResolversParentTypes['ComponentComApplication']> = ResolversObject<{
  contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComponentParagraphMdxResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentParagraphMdx'] = ResolversParentTypes['ComponentParagraphMdx']> = ResolversObject<{
  collapsed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComponentPeriodPeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentPeriodPeriod'] = ResolversParentTypes['ComponentPeriodPeriod']> = ResolversObject<{
  end?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  replace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComponentPeriodWorkPeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentPeriodWorkPeriod'] = ResolversParentTypes['ComponentPeriodWorkPeriod']> = ResolversObject<{
  end?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  end_replace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComponentUrlLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentUrlLinks'] = ResolversParentTypes['ComponentUrlLinks']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type GenericMorphResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenericMorph'] = ResolversParentTypes['GenericMorph']> = ResolversObject<{
  __resolveType: TypeResolveFn<'App' | 'Category' | 'ComponentComApplication' | 'ComponentParagraphMdx' | 'ComponentPeriodPeriod' | 'ComponentPeriodWorkPeriod' | 'ComponentUrlLinks' | 'Group' | 'I18NLocale' | 'Post' | 'Profile' | 'SitemapSitemap' | 'SitemapSitemapCache' | 'UploadFile' | 'UploadFolder' | 'UsersPermissionsPermission' | 'UsersPermissionsRole' | 'UsersPermissionsUser' | 'Work' | 'WorkCategory', ParentType, ContextType>;
}>;

export type GroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['Group'] = ResolversParentTypes['Group']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  posts?: Resolver<Maybe<ResolversTypes['PostRelationResponseCollection']>, ParentType, ContextType, RequireFields<GroupPostsArgs, 'pagination' | 'publicationState' | 'sort'>>;
  thumbnail?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ENUM_GROUP_TYPE'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GroupEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupEntity'] = ResolversParentTypes['GroupEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GroupEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupEntityResponse'] = ResolversParentTypes['GroupEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['GroupEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GroupEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupEntityResponseCollection'] = ResolversParentTypes['GroupEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['GroupEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type I18NLocaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocale'] = ResolversParentTypes['I18NLocale']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type I18NLocaleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntity'] = ResolversParentTypes['I18NLocaleEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['I18NLocale']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type I18NLocaleEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntityResponse'] = ResolversParentTypes['I18NLocaleEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['I18NLocaleEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type I18NLocaleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntityResponseCollection'] = ResolversParentTypes['I18NLocaleEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['I18NLocaleEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  changePassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'currentPassword' | 'password' | 'passwordConfirmation'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'data'>>;
  createGroup?: Resolver<Maybe<ResolversTypes['GroupEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateGroupArgs, 'data'>>;
  createPost?: Resolver<Maybe<ResolversTypes['PostEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'data'>>;
  createSitemapSitemap?: Resolver<Maybe<ResolversTypes['SitemapSitemapEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateSitemapSitemapArgs, 'data'>>;
  createSitemapSitemapCache?: Resolver<Maybe<ResolversTypes['SitemapSitemapCacheEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateSitemapSitemapCacheArgs, 'data'>>;
  createUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateUploadFileArgs, 'data'>>;
  createUploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateUploadFolderArgs, 'data'>>;
  createUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsCreateRolePayload']>, ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsRoleArgs, 'data'>>;
  createUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsUserArgs, 'data'>>;
  createWork?: Resolver<Maybe<ResolversTypes['WorkEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateWorkArgs, 'data'>>;
  createWorkCategory?: Resolver<Maybe<ResolversTypes['WorkCategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateWorkCategoryArgs, 'data'>>;
  deleteApp?: Resolver<Maybe<ResolversTypes['AppEntityResponse']>, ParentType, ContextType>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
  deleteGroup?: Resolver<Maybe<ResolversTypes['GroupEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteGroupArgs, 'id'>>;
  deletePost?: Resolver<Maybe<ResolversTypes['PostEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>;
  deleteProfile?: Resolver<Maybe<ResolversTypes['ProfileEntityResponse']>, ParentType, ContextType>;
  deleteSitemapSitemap?: Resolver<Maybe<ResolversTypes['SitemapSitemapEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteSitemapSitemapArgs, 'id'>>;
  deleteSitemapSitemapCache?: Resolver<Maybe<ResolversTypes['SitemapSitemapCacheEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteSitemapSitemapCacheArgs, 'id'>>;
  deleteUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteUploadFileArgs, 'id'>>;
  deleteUploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteUploadFolderArgs, 'id'>>;
  deleteUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsDeleteRolePayload']>, ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsRoleArgs, 'id'>>;
  deleteUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsUserArgs, 'id'>>;
  deleteWork?: Resolver<Maybe<ResolversTypes['WorkEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteWorkArgs, 'id'>>;
  deleteWorkCategory?: Resolver<Maybe<ResolversTypes['WorkCategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteWorkCategoryArgs, 'id'>>;
  emailConfirmation?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationEmailConfirmationArgs, 'confirmation'>>;
  forgotPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsPasswordPayload']>, ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  login?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  multipleUpload?: Resolver<Array<Maybe<ResolversTypes['UploadFileEntityResponse']>>, ParentType, ContextType, RequireFields<MutationMultipleUploadArgs, 'files'>>;
  register?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  removeFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationRemoveFileArgs, 'id'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'code' | 'password' | 'passwordConfirmation'>>;
  updateApp?: Resolver<Maybe<ResolversTypes['AppEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateAppArgs, 'data'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'data' | 'id'>>;
  updateFileInfo?: Resolver<ResolversTypes['UploadFileEntityResponse'], ParentType, ContextType, RequireFields<MutationUpdateFileInfoArgs, 'id'>>;
  updateGroup?: Resolver<Maybe<ResolversTypes['GroupEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateGroupArgs, 'data' | 'id'>>;
  updatePost?: Resolver<Maybe<ResolversTypes['PostEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'data' | 'id'>>;
  updateProfile?: Resolver<Maybe<ResolversTypes['ProfileEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateProfileArgs, 'data'>>;
  updateSitemapSitemap?: Resolver<Maybe<ResolversTypes['SitemapSitemapEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateSitemapSitemapArgs, 'data' | 'id'>>;
  updateSitemapSitemapCache?: Resolver<Maybe<ResolversTypes['SitemapSitemapCacheEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateSitemapSitemapCacheArgs, 'data' | 'id'>>;
  updateUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateUploadFileArgs, 'data' | 'id'>>;
  updateUploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateUploadFolderArgs, 'data' | 'id'>>;
  updateUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsUpdateRolePayload']>, ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsRoleArgs, 'data' | 'id'>>;
  updateUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsUserArgs, 'data' | 'id'>>;
  updateWork?: Resolver<Maybe<ResolversTypes['WorkEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateWorkArgs, 'data' | 'id'>>;
  updateWorkCategory?: Resolver<Maybe<ResolversTypes['WorkCategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateWorkCategoryArgs, 'data' | 'id'>>;
  upload?: Resolver<ResolversTypes['UploadFileEntityResponse'], ParentType, ContextType, RequireFields<MutationUploadArgs, 'file'>>;
}>;

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = ResolversObject<{
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = ResolversObject<{
  categories?: Resolver<Maybe<ResolversTypes['CategoryRelationResponseCollection']>, ParentType, ContextType, RequireFields<PostCategoriesArgs, 'pagination' | 'sort'>>;
  contents?: Resolver<Array<Maybe<ResolversTypes['ComponentParagraphMdx']>>, ParentType, ContextType, RequireFields<PostContentsArgs, 'pagination' | 'sort'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  groups?: Resolver<Maybe<ResolversTypes['GroupEntityResponse']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostEntity'] = ResolversParentTypes['PostEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostEntityResponse'] = ResolversParentTypes['PostEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['PostEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostEntityResponseCollection'] = ResolversParentTypes['PostEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['PostEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostRelationResponseCollection'] = ResolversParentTypes['PostRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['PostEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  specialty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileEntity'] = ResolversParentTypes['ProfileEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileEntityResponse'] = ResolversParentTypes['ProfileEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['ProfileEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  app?: Resolver<Maybe<ResolversTypes['AppEntityResponse']>, ParentType, ContextType, RequireFields<QueryAppArgs, 'publicationState'>>;
  categories?: Resolver<Maybe<ResolversTypes['CategoryEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, 'pagination' | 'sort'>>;
  category?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, Partial<QueryCategoryArgs>>;
  group?: Resolver<Maybe<ResolversTypes['GroupEntityResponse']>, ParentType, ContextType, Partial<QueryGroupArgs>>;
  groups?: Resolver<Maybe<ResolversTypes['GroupEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryGroupsArgs, 'pagination' | 'sort'>>;
  i18NLocale?: Resolver<Maybe<ResolversTypes['I18NLocaleEntityResponse']>, ParentType, ContextType, Partial<QueryI18NLocaleArgs>>;
  i18NLocales?: Resolver<Maybe<ResolversTypes['I18NLocaleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryI18NLocalesArgs, 'pagination' | 'sort'>>;
  me?: Resolver<Maybe<ResolversTypes['UsersPermissionsMe']>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['PostEntityResponse']>, ParentType, ContextType, Partial<QueryPostArgs>>;
  posts?: Resolver<Maybe<ResolversTypes['PostEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryPostsArgs, 'pagination' | 'publicationState' | 'sort'>>;
  profile?: Resolver<Maybe<ResolversTypes['ProfileEntityResponse']>, ParentType, ContextType, RequireFields<QueryProfileArgs, 'publicationState'>>;
  sitemapSitemap?: Resolver<Maybe<ResolversTypes['SitemapSitemapEntityResponse']>, ParentType, ContextType, Partial<QuerySitemapSitemapArgs>>;
  sitemapSitemapCache?: Resolver<Maybe<ResolversTypes['SitemapSitemapCacheEntityResponse']>, ParentType, ContextType, Partial<QuerySitemapSitemapCacheArgs>>;
  sitemapSitemapCaches?: Resolver<Maybe<ResolversTypes['SitemapSitemapCacheEntityResponseCollection']>, ParentType, ContextType, RequireFields<QuerySitemapSitemapCachesArgs, 'pagination' | 'sort'>>;
  sitemapSitemaps?: Resolver<Maybe<ResolversTypes['SitemapSitemapEntityResponseCollection']>, ParentType, ContextType, RequireFields<QuerySitemapSitemapsArgs, 'pagination' | 'sort'>>;
  uploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, Partial<QueryUploadFileArgs>>;
  uploadFiles?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUploadFilesArgs, 'pagination' | 'sort'>>;
  uploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, Partial<QueryUploadFolderArgs>>;
  uploadFolders?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUploadFoldersArgs, 'pagination' | 'sort'>>;
  usersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType, Partial<QueryUsersPermissionsRoleArgs>>;
  usersPermissionsRoles?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsRolesArgs, 'pagination' | 'sort'>>;
  usersPermissionsUser?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponse']>, ParentType, ContextType, Partial<QueryUsersPermissionsUserArgs>>;
  usersPermissionsUsers?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsUsersArgs, 'pagination' | 'sort'>>;
  work?: Resolver<Maybe<ResolversTypes['WorkEntityResponse']>, ParentType, ContextType, Partial<QueryWorkArgs>>;
  workCategories?: Resolver<Maybe<ResolversTypes['WorkCategoryEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryWorkCategoriesArgs, 'pagination' | 'sort'>>;
  workCategory?: Resolver<Maybe<ResolversTypes['WorkCategoryEntityResponse']>, ParentType, ContextType, Partial<QueryWorkCategoryArgs>>;
  works?: Resolver<Maybe<ResolversTypes['WorkEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryWorksArgs, 'pagination' | 'publicationState' | 'sort'>>;
}>;

export type ResponseCollectionMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseCollectionMeta'] = ResolversParentTypes['ResponseCollectionMeta']> = ResolversObject<{
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SitemapSitemapResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitemapSitemap'] = ResolversParentTypes['SitemapSitemap']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  delta?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  link_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sitemap_string?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ENUM_SITEMAPSITEMAP_TYPE']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SitemapSitemapCacheResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitemapSitemapCache'] = ResolversParentTypes['SitemapSitemapCache']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sitemap_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sitemap_json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SitemapSitemapCacheEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitemapSitemapCacheEntity'] = ResolversParentTypes['SitemapSitemapCacheEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['SitemapSitemapCache']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SitemapSitemapCacheEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitemapSitemapCacheEntityResponse'] = ResolversParentTypes['SitemapSitemapCacheEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['SitemapSitemapCacheEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SitemapSitemapCacheEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitemapSitemapCacheEntityResponseCollection'] = ResolversParentTypes['SitemapSitemapCacheEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['SitemapSitemapCacheEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SitemapSitemapEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitemapSitemapEntity'] = ResolversParentTypes['SitemapSitemapEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['SitemapSitemap']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SitemapSitemapEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitemapSitemapEntityResponse'] = ResolversParentTypes['SitemapSitemapEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['SitemapSitemapEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SitemapSitemapEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitemapSitemapEntityResponseCollection'] = ResolversParentTypes['SitemapSitemapEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['SitemapSitemapEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UploadFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFile'] = ResolversParentTypes['UploadFile']> = ResolversObject<{
  alternativeText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formats?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previewUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider_metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  related?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFileEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntity'] = ResolversParentTypes['UploadFileEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFileEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntityResponse'] = ResolversParentTypes['UploadFileEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFileEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntityResponseCollection'] = ResolversParentTypes['UploadFileEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFileRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileRelationResponseCollection'] = ResolversParentTypes['UploadFileRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFolderResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolder'] = ResolversParentTypes['UploadFolder']> = ResolversObject<{
  children?: Resolver<Maybe<ResolversTypes['UploadFolderRelationResponseCollection']>, ParentType, ContextType, RequireFields<UploadFolderChildrenArgs, 'pagination' | 'sort'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  files?: Resolver<Maybe<ResolversTypes['UploadFileRelationResponseCollection']>, ParentType, ContextType, RequireFields<UploadFolderFilesArgs, 'pagination' | 'sort'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pathId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFolderEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderEntity'] = ResolversParentTypes['UploadFolderEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['UploadFolder']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFolderEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderEntityResponse'] = ResolversParentTypes['UploadFolderEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['UploadFolderEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFolderEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderEntityResponseCollection'] = ResolversParentTypes['UploadFolderEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UploadFolderEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFolderRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderRelationResponseCollection'] = ResolversParentTypes['UploadFolderRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UploadFolderEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsCreateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsCreateRolePayload'] = ResolversParentTypes['UsersPermissionsCreateRolePayload']> = ResolversObject<{
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsDeleteRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsDeleteRolePayload'] = ResolversParentTypes['UsersPermissionsDeleteRolePayload']> = ResolversObject<{
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsLoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsLoginPayload'] = ResolversParentTypes['UsersPermissionsLoginPayload']> = ResolversObject<{
  jwt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UsersPermissionsMe'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMe'] = ResolversParentTypes['UsersPermissionsMe']> = ResolversObject<{
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsMeRole']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsMeRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMeRole'] = ResolversParentTypes['UsersPermissionsMeRole']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsPasswordPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPasswordPayload'] = ResolversParentTypes['UsersPermissionsPasswordPayload']> = ResolversObject<{
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermission'] = ResolversParentTypes['UsersPermissionsPermission']> = ResolversObject<{
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsPermissionEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermissionEntity'] = ResolversParentTypes['UsersPermissionsPermissionEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermission']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UsersPermissionsPermissionEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRole'] = ResolversParentTypes['UsersPermissionsRole']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermissionRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRolePermissionsArgs, 'pagination' | 'sort'>>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRoleUsersArgs, 'pagination' | 'sort'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsRoleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntity'] = ResolversParentTypes['UsersPermissionsRoleEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsRoleEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntityResponse'] = ResolversParentTypes['UsersPermissionsRoleEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UsersPermissionsRoleEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsUpdateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUpdateRolePayload'] = ResolversParentTypes['UsersPermissionsUpdateRolePayload']> = ResolversObject<{
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUser'] = ResolversParentTypes['UsersPermissionsUser']> = ResolversObject<{
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsUserEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntity'] = ResolversParentTypes['UsersPermissionsUserEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsUserEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntityResponse'] = ResolversParentTypes['UsersPermissionsUserEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsUserEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsUserEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPermissionsUserRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsUserRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Work'] = ResolversParentTypes['Work']> = ResolversObject<{
  contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  end_replace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComponentUrlLinks']>>>, ParentType, ContextType, RequireFields<WorkLinksArgs, 'pagination' | 'sort'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  retrospective?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stack?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  start?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  sub_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnails?: Resolver<Maybe<ResolversTypes['UploadFileRelationResponseCollection']>, ParentType, ContextType, RequireFields<WorkThumbnailsArgs, 'pagination' | 'sort'>>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ENUM_WORK_TYPE']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  work_category?: Resolver<Maybe<ResolversTypes['WorkCategoryEntityResponse']>, ParentType, ContextType>;
  work_summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkCategory'] = ResolversParentTypes['WorkCategory']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  title_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ENUM_WORKCATEGORY_TYPE'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  works?: Resolver<Maybe<ResolversTypes['WorkRelationResponseCollection']>, ParentType, ContextType, RequireFields<WorkCategoryWorksArgs, 'pagination' | 'publicationState' | 'sort'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkCategoryEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkCategoryEntity'] = ResolversParentTypes['WorkCategoryEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['WorkCategory']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkCategoryEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkCategoryEntityResponse'] = ResolversParentTypes['WorkCategoryEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['WorkCategoryEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkCategoryEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkCategoryEntityResponseCollection'] = ResolversParentTypes['WorkCategoryEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['WorkCategoryEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkEntity'] = ResolversParentTypes['WorkEntity']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['Work']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkEntityResponse'] = ResolversParentTypes['WorkEntityResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['WorkEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkEntityResponseCollection'] = ResolversParentTypes['WorkEntityResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['WorkEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkRelationResponseCollection'] = ResolversParentTypes['WorkRelationResponseCollection']> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['WorkEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  App?: AppResolvers<ContextType>;
  AppEntity?: AppEntityResolvers<ContextType>;
  AppEntityResponse?: AppEntityResponseResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryEntity?: CategoryEntityResolvers<ContextType>;
  CategoryEntityResponse?: CategoryEntityResponseResolvers<ContextType>;
  CategoryEntityResponseCollection?: CategoryEntityResponseCollectionResolvers<ContextType>;
  CategoryRelationResponseCollection?: CategoryRelationResponseCollectionResolvers<ContextType>;
  ComponentComApplication?: ComponentComApplicationResolvers<ContextType>;
  ComponentParagraphMdx?: ComponentParagraphMdxResolvers<ContextType>;
  ComponentPeriodPeriod?: ComponentPeriodPeriodResolvers<ContextType>;
  ComponentPeriodWorkPeriod?: ComponentPeriodWorkPeriodResolvers<ContextType>;
  ComponentUrlLinks?: ComponentUrlLinksResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  GenericMorph?: GenericMorphResolvers<ContextType>;
  Group?: GroupResolvers<ContextType>;
  GroupEntity?: GroupEntityResolvers<ContextType>;
  GroupEntityResponse?: GroupEntityResponseResolvers<ContextType>;
  GroupEntityResponseCollection?: GroupEntityResponseCollectionResolvers<ContextType>;
  I18NLocale?: I18NLocaleResolvers<ContextType>;
  I18NLocaleEntity?: I18NLocaleEntityResolvers<ContextType>;
  I18NLocaleEntityResponse?: I18NLocaleEntityResponseResolvers<ContextType>;
  I18NLocaleEntityResponseCollection?: I18NLocaleEntityResponseCollectionResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostEntity?: PostEntityResolvers<ContextType>;
  PostEntityResponse?: PostEntityResponseResolvers<ContextType>;
  PostEntityResponseCollection?: PostEntityResponseCollectionResolvers<ContextType>;
  PostRelationResponseCollection?: PostRelationResponseCollectionResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  ProfileEntity?: ProfileEntityResolvers<ContextType>;
  ProfileEntityResponse?: ProfileEntityResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ResponseCollectionMeta?: ResponseCollectionMetaResolvers<ContextType>;
  SitemapSitemap?: SitemapSitemapResolvers<ContextType>;
  SitemapSitemapCache?: SitemapSitemapCacheResolvers<ContextType>;
  SitemapSitemapCacheEntity?: SitemapSitemapCacheEntityResolvers<ContextType>;
  SitemapSitemapCacheEntityResponse?: SitemapSitemapCacheEntityResponseResolvers<ContextType>;
  SitemapSitemapCacheEntityResponseCollection?: SitemapSitemapCacheEntityResponseCollectionResolvers<ContextType>;
  SitemapSitemapEntity?: SitemapSitemapEntityResolvers<ContextType>;
  SitemapSitemapEntityResponse?: SitemapSitemapEntityResponseResolvers<ContextType>;
  SitemapSitemapEntityResponseCollection?: SitemapSitemapEntityResponseCollectionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  UploadFile?: UploadFileResolvers<ContextType>;
  UploadFileEntity?: UploadFileEntityResolvers<ContextType>;
  UploadFileEntityResponse?: UploadFileEntityResponseResolvers<ContextType>;
  UploadFileEntityResponseCollection?: UploadFileEntityResponseCollectionResolvers<ContextType>;
  UploadFileRelationResponseCollection?: UploadFileRelationResponseCollectionResolvers<ContextType>;
  UploadFolder?: UploadFolderResolvers<ContextType>;
  UploadFolderEntity?: UploadFolderEntityResolvers<ContextType>;
  UploadFolderEntityResponse?: UploadFolderEntityResponseResolvers<ContextType>;
  UploadFolderEntityResponseCollection?: UploadFolderEntityResponseCollectionResolvers<ContextType>;
  UploadFolderRelationResponseCollection?: UploadFolderRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsCreateRolePayload?: UsersPermissionsCreateRolePayloadResolvers<ContextType>;
  UsersPermissionsDeleteRolePayload?: UsersPermissionsDeleteRolePayloadResolvers<ContextType>;
  UsersPermissionsLoginPayload?: UsersPermissionsLoginPayloadResolvers<ContextType>;
  UsersPermissionsMe?: UsersPermissionsMeResolvers<ContextType>;
  UsersPermissionsMeRole?: UsersPermissionsMeRoleResolvers<ContextType>;
  UsersPermissionsPasswordPayload?: UsersPermissionsPasswordPayloadResolvers<ContextType>;
  UsersPermissionsPermission?: UsersPermissionsPermissionResolvers<ContextType>;
  UsersPermissionsPermissionEntity?: UsersPermissionsPermissionEntityResolvers<ContextType>;
  UsersPermissionsPermissionRelationResponseCollection?: UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsRole?: UsersPermissionsRoleResolvers<ContextType>;
  UsersPermissionsRoleEntity?: UsersPermissionsRoleEntityResolvers<ContextType>;
  UsersPermissionsRoleEntityResponse?: UsersPermissionsRoleEntityResponseResolvers<ContextType>;
  UsersPermissionsRoleEntityResponseCollection?: UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsUpdateRolePayload?: UsersPermissionsUpdateRolePayloadResolvers<ContextType>;
  UsersPermissionsUser?: UsersPermissionsUserResolvers<ContextType>;
  UsersPermissionsUserEntity?: UsersPermissionsUserEntityResolvers<ContextType>;
  UsersPermissionsUserEntityResponse?: UsersPermissionsUserEntityResponseResolvers<ContextType>;
  UsersPermissionsUserEntityResponseCollection?: UsersPermissionsUserEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsUserRelationResponseCollection?: UsersPermissionsUserRelationResponseCollectionResolvers<ContextType>;
  Work?: WorkResolvers<ContextType>;
  WorkCategory?: WorkCategoryResolvers<ContextType>;
  WorkCategoryEntity?: WorkCategoryEntityResolvers<ContextType>;
  WorkCategoryEntityResponse?: WorkCategoryEntityResponseResolvers<ContextType>;
  WorkCategoryEntityResponseCollection?: WorkCategoryEntityResponseCollectionResolvers<ContextType>;
  WorkEntity?: WorkEntityResolvers<ContextType>;
  WorkEntityResponse?: WorkEntityResponseResolvers<ContextType>;
  WorkEntityResponseCollection?: WorkEntityResponseCollectionResolvers<ContextType>;
  WorkRelationResponseCollection?: WorkRelationResponseCollectionResolvers<ContextType>;
}>;

