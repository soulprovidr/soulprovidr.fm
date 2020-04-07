export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 */
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export type ContentfulArticle = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  repositoryName?: Maybe<Scalars['String']>,
  publishDate?: Maybe<Scalars['Date']>,
  category?: Maybe<ContentfulCategory>,
  heroImage?: Maybe<ContentfulAsset>,
  author?: Maybe<ContentfulPerson>,
  description?: Maybe<ContentfulArticleDescriptionTextNode>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulArticleSys>,
  node_locale?: Maybe<Scalars['String']>,
  soundCloudUrl?: Maybe<Scalars['String']>,
  body?: Maybe<ContentfulArticleBodyTextNode>,
  childContentfulArticleDescriptionTextNode?: Maybe<ContentfulArticleDescriptionTextNode>,
  childContentfulArticleBodyTextNode?: Maybe<ContentfulArticleBodyTextNode>,
};


export type ContentfulArticlePublishDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulArticleCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulArticleUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulArticleBodyTextNode = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  body?: Maybe<Scalars['String']>,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
};

export type ContentfulArticleBodyTextNodeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulArticleBodyTextNodeEdge>,
  nodes: Array<ContentfulArticleBodyTextNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulArticleBodyTextNodeGroupConnection>,
};


export type ContentfulArticleBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulArticleBodyTextNodeFieldsEnum
};


export type ContentfulArticleBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulArticleBodyTextNodeFieldsEnum
};

export type ContentfulArticleBodyTextNodeEdge = {
  next?: Maybe<ContentfulArticleBodyTextNode>,
  node: ContentfulArticleBodyTextNode,
  previous?: Maybe<ContentfulArticleBodyTextNode>,
};

export type ContentfulArticleBodyTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'body' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type ContentfulArticleBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
};

export type ContentfulArticleBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulArticleBodyTextNodeEdge>,
  nodes: Array<ContentfulArticleBodyTextNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulArticleBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulArticleBodyTextNodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulArticleConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulArticleEdge>,
  nodes: Array<ContentfulArticle>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulArticleGroupConnection>,
};


export type ContentfulArticleConnectionDistinctArgs = {
  field: ContentfulArticleFieldsEnum
};


export type ContentfulArticleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulArticleFieldsEnum
};

export type ContentfulArticleDescriptionTextNode = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  description?: Maybe<Scalars['String']>,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
};

export type ContentfulArticleDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulArticleDescriptionTextNodeEdge>,
  nodes: Array<ContentfulArticleDescriptionTextNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulArticleDescriptionTextNodeGroupConnection>,
};


export type ContentfulArticleDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulArticleDescriptionTextNodeFieldsEnum
};


export type ContentfulArticleDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulArticleDescriptionTextNodeFieldsEnum
};

export type ContentfulArticleDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulArticleDescriptionTextNode>,
  node: ContentfulArticleDescriptionTextNode,
  previous?: Maybe<ContentfulArticleDescriptionTextNode>,
};

export type ContentfulArticleDescriptionTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'description' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type ContentfulArticleDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
};

export type ContentfulArticleDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulArticleDescriptionTextNodeEdge>,
  nodes: Array<ContentfulArticleDescriptionTextNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulArticleDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulArticleDescriptionTextNodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulArticleEdge = {
  next?: Maybe<ContentfulArticle>,
  node: ContentfulArticle,
  previous?: Maybe<ContentfulArticle>,
};

export type ContentfulArticleFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'slug' |
  'repositoryName' |
  'publishDate' |
  'category___id' |
  'category___parent___id' |
  'category___parent___parent___id' |
  'category___parent___parent___children' |
  'category___parent___children' |
  'category___parent___children___id' |
  'category___parent___children___children' |
  'category___parent___internal___content' |
  'category___parent___internal___contentDigest' |
  'category___parent___internal___description' |
  'category___parent___internal___fieldOwners' |
  'category___parent___internal___ignoreType' |
  'category___parent___internal___mediaType' |
  'category___parent___internal___owner' |
  'category___parent___internal___type' |
  'category___children' |
  'category___children___id' |
  'category___children___parent___id' |
  'category___children___parent___children' |
  'category___children___children' |
  'category___children___children___id' |
  'category___children___children___children' |
  'category___children___internal___content' |
  'category___children___internal___contentDigest' |
  'category___children___internal___description' |
  'category___children___internal___fieldOwners' |
  'category___children___internal___ignoreType' |
  'category___children___internal___mediaType' |
  'category___children___internal___owner' |
  'category___children___internal___type' |
  'category___internal___content' |
  'category___internal___contentDigest' |
  'category___internal___description' |
  'category___internal___fieldOwners' |
  'category___internal___ignoreType' |
  'category___internal___mediaType' |
  'category___internal___owner' |
  'category___internal___type' |
  'category___key' |
  'category___label' |
  'category___colour' |
  'category___article' |
  'category___article___id' |
  'category___article___parent___id' |
  'category___article___parent___children' |
  'category___article___children' |
  'category___article___children___id' |
  'category___article___children___children' |
  'category___article___internal___content' |
  'category___article___internal___contentDigest' |
  'category___article___internal___description' |
  'category___article___internal___fieldOwners' |
  'category___article___internal___ignoreType' |
  'category___article___internal___mediaType' |
  'category___article___internal___owner' |
  'category___article___internal___type' |
  'category___article___title' |
  'category___article___slug' |
  'category___article___repositoryName' |
  'category___article___publishDate' |
  'category___article___category___id' |
  'category___article___category___children' |
  'category___article___category___key' |
  'category___article___category___label' |
  'category___article___category___colour' |
  'category___article___category___article' |
  'category___article___category___spaceId' |
  'category___article___category___contentful_id' |
  'category___article___category___createdAt' |
  'category___article___category___updatedAt' |
  'category___article___category___node_locale' |
  'category___article___heroImage___id' |
  'category___article___heroImage___children' |
  'category___article___heroImage___contentful_id' |
  'category___article___heroImage___title' |
  'category___article___heroImage___description' |
  'category___article___heroImage___node_locale' |
  'category___article___author___id' |
  'category___article___author___children' |
  'category___article___author___name' |
  'category___article___author___email' |
  'category___article___author___facebook' |
  'category___article___author___twitter' |
  'category___article___author___article' |
  'category___article___author___spaceId' |
  'category___article___author___contentful_id' |
  'category___article___author___createdAt' |
  'category___article___author___updatedAt' |
  'category___article___author___node_locale' |
  'category___article___description___id' |
  'category___article___description___children' |
  'category___article___description___description' |
  'category___article___spaceId' |
  'category___article___contentful_id' |
  'category___article___createdAt' |
  'category___article___updatedAt' |
  'category___article___sys___revision' |
  'category___article___node_locale' |
  'category___article___soundCloudUrl' |
  'category___article___body___id' |
  'category___article___body___children' |
  'category___article___body___body' |
  'category___article___childContentfulArticleDescriptionTextNode___id' |
  'category___article___childContentfulArticleDescriptionTextNode___children' |
  'category___article___childContentfulArticleDescriptionTextNode___description' |
  'category___article___childContentfulArticleBodyTextNode___id' |
  'category___article___childContentfulArticleBodyTextNode___children' |
  'category___article___childContentfulArticleBodyTextNode___body' |
  'category___spaceId' |
  'category___contentful_id' |
  'category___createdAt' |
  'category___updatedAt' |
  'category___sys___revision' |
  'category___node_locale' |
  'heroImage___id' |
  'heroImage___parent___id' |
  'heroImage___parent___parent___id' |
  'heroImage___parent___parent___children' |
  'heroImage___parent___children' |
  'heroImage___parent___children___id' |
  'heroImage___parent___children___children' |
  'heroImage___parent___internal___content' |
  'heroImage___parent___internal___contentDigest' |
  'heroImage___parent___internal___description' |
  'heroImage___parent___internal___fieldOwners' |
  'heroImage___parent___internal___ignoreType' |
  'heroImage___parent___internal___mediaType' |
  'heroImage___parent___internal___owner' |
  'heroImage___parent___internal___type' |
  'heroImage___children' |
  'heroImage___children___id' |
  'heroImage___children___parent___id' |
  'heroImage___children___parent___children' |
  'heroImage___children___children' |
  'heroImage___children___children___id' |
  'heroImage___children___children___children' |
  'heroImage___children___internal___content' |
  'heroImage___children___internal___contentDigest' |
  'heroImage___children___internal___description' |
  'heroImage___children___internal___fieldOwners' |
  'heroImage___children___internal___ignoreType' |
  'heroImage___children___internal___mediaType' |
  'heroImage___children___internal___owner' |
  'heroImage___children___internal___type' |
  'heroImage___internal___content' |
  'heroImage___internal___contentDigest' |
  'heroImage___internal___description' |
  'heroImage___internal___fieldOwners' |
  'heroImage___internal___ignoreType' |
  'heroImage___internal___mediaType' |
  'heroImage___internal___owner' |
  'heroImage___internal___type' |
  'heroImage___contentful_id' |
  'heroImage___file___url' |
  'heroImage___file___details___size' |
  'heroImage___file___fileName' |
  'heroImage___file___contentType' |
  'heroImage___title' |
  'heroImage___description' |
  'heroImage___node_locale' |
  'heroImage___fixed___base64' |
  'heroImage___fixed___tracedSVG' |
  'heroImage___fixed___aspectRatio' |
  'heroImage___fixed___width' |
  'heroImage___fixed___height' |
  'heroImage___fixed___src' |
  'heroImage___fixed___srcSet' |
  'heroImage___fixed___srcWebp' |
  'heroImage___fixed___srcSetWebp' |
  'heroImage___resolutions___base64' |
  'heroImage___resolutions___tracedSVG' |
  'heroImage___resolutions___aspectRatio' |
  'heroImage___resolutions___width' |
  'heroImage___resolutions___height' |
  'heroImage___resolutions___src' |
  'heroImage___resolutions___srcSet' |
  'heroImage___resolutions___srcWebp' |
  'heroImage___resolutions___srcSetWebp' |
  'heroImage___fluid___base64' |
  'heroImage___fluid___tracedSVG' |
  'heroImage___fluid___aspectRatio' |
  'heroImage___fluid___src' |
  'heroImage___fluid___srcSet' |
  'heroImage___fluid___srcWebp' |
  'heroImage___fluid___srcSetWebp' |
  'heroImage___fluid___sizes' |
  'heroImage___sizes___base64' |
  'heroImage___sizes___tracedSVG' |
  'heroImage___sizes___aspectRatio' |
  'heroImage___sizes___src' |
  'heroImage___sizes___srcSet' |
  'heroImage___sizes___srcWebp' |
  'heroImage___sizes___srcSetWebp' |
  'heroImage___sizes___sizes' |
  'heroImage___resize___base64' |
  'heroImage___resize___tracedSVG' |
  'heroImage___resize___src' |
  'heroImage___resize___width' |
  'heroImage___resize___height' |
  'heroImage___resize___aspectRatio' |
  'author___id' |
  'author___parent___id' |
  'author___parent___parent___id' |
  'author___parent___parent___children' |
  'author___parent___children' |
  'author___parent___children___id' |
  'author___parent___children___children' |
  'author___parent___internal___content' |
  'author___parent___internal___contentDigest' |
  'author___parent___internal___description' |
  'author___parent___internal___fieldOwners' |
  'author___parent___internal___ignoreType' |
  'author___parent___internal___mediaType' |
  'author___parent___internal___owner' |
  'author___parent___internal___type' |
  'author___children' |
  'author___children___id' |
  'author___children___parent___id' |
  'author___children___parent___children' |
  'author___children___children' |
  'author___children___children___id' |
  'author___children___children___children' |
  'author___children___internal___content' |
  'author___children___internal___contentDigest' |
  'author___children___internal___description' |
  'author___children___internal___fieldOwners' |
  'author___children___internal___ignoreType' |
  'author___children___internal___mediaType' |
  'author___children___internal___owner' |
  'author___children___internal___type' |
  'author___internal___content' |
  'author___internal___contentDigest' |
  'author___internal___description' |
  'author___internal___fieldOwners' |
  'author___internal___ignoreType' |
  'author___internal___mediaType' |
  'author___internal___owner' |
  'author___internal___type' |
  'author___name' |
  'author___email' |
  'author___facebook' |
  'author___twitter' |
  'author___image___id' |
  'author___image___parent___id' |
  'author___image___parent___children' |
  'author___image___children' |
  'author___image___children___id' |
  'author___image___children___children' |
  'author___image___internal___content' |
  'author___image___internal___contentDigest' |
  'author___image___internal___description' |
  'author___image___internal___fieldOwners' |
  'author___image___internal___ignoreType' |
  'author___image___internal___mediaType' |
  'author___image___internal___owner' |
  'author___image___internal___type' |
  'author___image___contentful_id' |
  'author___image___file___url' |
  'author___image___file___fileName' |
  'author___image___file___contentType' |
  'author___image___title' |
  'author___image___description' |
  'author___image___node_locale' |
  'author___image___fixed___base64' |
  'author___image___fixed___tracedSVG' |
  'author___image___fixed___aspectRatio' |
  'author___image___fixed___width' |
  'author___image___fixed___height' |
  'author___image___fixed___src' |
  'author___image___fixed___srcSet' |
  'author___image___fixed___srcWebp' |
  'author___image___fixed___srcSetWebp' |
  'author___image___resolutions___base64' |
  'author___image___resolutions___tracedSVG' |
  'author___image___resolutions___aspectRatio' |
  'author___image___resolutions___width' |
  'author___image___resolutions___height' |
  'author___image___resolutions___src' |
  'author___image___resolutions___srcSet' |
  'author___image___resolutions___srcWebp' |
  'author___image___resolutions___srcSetWebp' |
  'author___image___fluid___base64' |
  'author___image___fluid___tracedSVG' |
  'author___image___fluid___aspectRatio' |
  'author___image___fluid___src' |
  'author___image___fluid___srcSet' |
  'author___image___fluid___srcWebp' |
  'author___image___fluid___srcSetWebp' |
  'author___image___fluid___sizes' |
  'author___image___sizes___base64' |
  'author___image___sizes___tracedSVG' |
  'author___image___sizes___aspectRatio' |
  'author___image___sizes___src' |
  'author___image___sizes___srcSet' |
  'author___image___sizes___srcWebp' |
  'author___image___sizes___srcSetWebp' |
  'author___image___sizes___sizes' |
  'author___image___resize___base64' |
  'author___image___resize___tracedSVG' |
  'author___image___resize___src' |
  'author___image___resize___width' |
  'author___image___resize___height' |
  'author___image___resize___aspectRatio' |
  'author___article' |
  'author___article___id' |
  'author___article___parent___id' |
  'author___article___parent___children' |
  'author___article___children' |
  'author___article___children___id' |
  'author___article___children___children' |
  'author___article___internal___content' |
  'author___article___internal___contentDigest' |
  'author___article___internal___description' |
  'author___article___internal___fieldOwners' |
  'author___article___internal___ignoreType' |
  'author___article___internal___mediaType' |
  'author___article___internal___owner' |
  'author___article___internal___type' |
  'author___article___title' |
  'author___article___slug' |
  'author___article___repositoryName' |
  'author___article___publishDate' |
  'author___article___category___id' |
  'author___article___category___children' |
  'author___article___category___key' |
  'author___article___category___label' |
  'author___article___category___colour' |
  'author___article___category___article' |
  'author___article___category___spaceId' |
  'author___article___category___contentful_id' |
  'author___article___category___createdAt' |
  'author___article___category___updatedAt' |
  'author___article___category___node_locale' |
  'author___article___heroImage___id' |
  'author___article___heroImage___children' |
  'author___article___heroImage___contentful_id' |
  'author___article___heroImage___title' |
  'author___article___heroImage___description' |
  'author___article___heroImage___node_locale' |
  'author___article___author___id' |
  'author___article___author___children' |
  'author___article___author___name' |
  'author___article___author___email' |
  'author___article___author___facebook' |
  'author___article___author___twitter' |
  'author___article___author___article' |
  'author___article___author___spaceId' |
  'author___article___author___contentful_id' |
  'author___article___author___createdAt' |
  'author___article___author___updatedAt' |
  'author___article___author___node_locale' |
  'author___article___description___id' |
  'author___article___description___children' |
  'author___article___description___description' |
  'author___article___spaceId' |
  'author___article___contentful_id' |
  'author___article___createdAt' |
  'author___article___updatedAt' |
  'author___article___sys___revision' |
  'author___article___node_locale' |
  'author___article___soundCloudUrl' |
  'author___article___body___id' |
  'author___article___body___children' |
  'author___article___body___body' |
  'author___article___childContentfulArticleDescriptionTextNode___id' |
  'author___article___childContentfulArticleDescriptionTextNode___children' |
  'author___article___childContentfulArticleDescriptionTextNode___description' |
  'author___article___childContentfulArticleBodyTextNode___id' |
  'author___article___childContentfulArticleBodyTextNode___children' |
  'author___article___childContentfulArticleBodyTextNode___body' |
  'author___shortBio___id' |
  'author___shortBio___parent___id' |
  'author___shortBio___parent___children' |
  'author___shortBio___children' |
  'author___shortBio___children___id' |
  'author___shortBio___children___children' |
  'author___shortBio___internal___content' |
  'author___shortBio___internal___contentDigest' |
  'author___shortBio___internal___description' |
  'author___shortBio___internal___fieldOwners' |
  'author___shortBio___internal___ignoreType' |
  'author___shortBio___internal___mediaType' |
  'author___shortBio___internal___owner' |
  'author___shortBio___internal___type' |
  'author___shortBio___shortBio' |
  'author___shortBio___childMarkdownRemark___id' |
  'author___shortBio___childMarkdownRemark___excerpt' |
  'author___shortBio___childMarkdownRemark___rawMarkdownBody' |
  'author___shortBio___childMarkdownRemark___html' |
  'author___shortBio___childMarkdownRemark___htmlAst' |
  'author___shortBio___childMarkdownRemark___excerptAst' |
  'author___shortBio___childMarkdownRemark___headings' |
  'author___shortBio___childMarkdownRemark___timeToRead' |
  'author___shortBio___childMarkdownRemark___tableOfContents' |
  'author___shortBio___childMarkdownRemark___children' |
  'author___spaceId' |
  'author___contentful_id' |
  'author___createdAt' |
  'author___updatedAt' |
  'author___sys___revision' |
  'author___node_locale' |
  'author___childContentfulPersonShortBioTextNode___id' |
  'author___childContentfulPersonShortBioTextNode___parent___id' |
  'author___childContentfulPersonShortBioTextNode___parent___children' |
  'author___childContentfulPersonShortBioTextNode___children' |
  'author___childContentfulPersonShortBioTextNode___children___id' |
  'author___childContentfulPersonShortBioTextNode___children___children' |
  'author___childContentfulPersonShortBioTextNode___internal___content' |
  'author___childContentfulPersonShortBioTextNode___internal___contentDigest' |
  'author___childContentfulPersonShortBioTextNode___internal___description' |
  'author___childContentfulPersonShortBioTextNode___internal___fieldOwners' |
  'author___childContentfulPersonShortBioTextNode___internal___ignoreType' |
  'author___childContentfulPersonShortBioTextNode___internal___mediaType' |
  'author___childContentfulPersonShortBioTextNode___internal___owner' |
  'author___childContentfulPersonShortBioTextNode___internal___type' |
  'author___childContentfulPersonShortBioTextNode___shortBio' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___id' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___html' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___headings' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___children' |
  'description___id' |
  'description___parent___id' |
  'description___parent___parent___id' |
  'description___parent___parent___children' |
  'description___parent___children' |
  'description___parent___children___id' |
  'description___parent___children___children' |
  'description___parent___internal___content' |
  'description___parent___internal___contentDigest' |
  'description___parent___internal___description' |
  'description___parent___internal___fieldOwners' |
  'description___parent___internal___ignoreType' |
  'description___parent___internal___mediaType' |
  'description___parent___internal___owner' |
  'description___parent___internal___type' |
  'description___children' |
  'description___children___id' |
  'description___children___parent___id' |
  'description___children___parent___children' |
  'description___children___children' |
  'description___children___children___id' |
  'description___children___children___children' |
  'description___children___internal___content' |
  'description___children___internal___contentDigest' |
  'description___children___internal___description' |
  'description___children___internal___fieldOwners' |
  'description___children___internal___ignoreType' |
  'description___children___internal___mediaType' |
  'description___children___internal___owner' |
  'description___children___internal___type' |
  'description___internal___content' |
  'description___internal___contentDigest' |
  'description___internal___description' |
  'description___internal___fieldOwners' |
  'description___internal___ignoreType' |
  'description___internal___mediaType' |
  'description___internal___owner' |
  'description___internal___type' |
  'description___description' |
  'description___childMarkdownRemark___id' |
  'description___childMarkdownRemark___frontmatter___title' |
  'description___childMarkdownRemark___excerpt' |
  'description___childMarkdownRemark___rawMarkdownBody' |
  'description___childMarkdownRemark___html' |
  'description___childMarkdownRemark___htmlAst' |
  'description___childMarkdownRemark___excerptAst' |
  'description___childMarkdownRemark___headings' |
  'description___childMarkdownRemark___headings___value' |
  'description___childMarkdownRemark___headings___depth' |
  'description___childMarkdownRemark___timeToRead' |
  'description___childMarkdownRemark___tableOfContents' |
  'description___childMarkdownRemark___wordCount___paragraphs' |
  'description___childMarkdownRemark___wordCount___sentences' |
  'description___childMarkdownRemark___wordCount___words' |
  'description___childMarkdownRemark___parent___id' |
  'description___childMarkdownRemark___parent___children' |
  'description___childMarkdownRemark___children' |
  'description___childMarkdownRemark___children___id' |
  'description___childMarkdownRemark___children___children' |
  'description___childMarkdownRemark___internal___content' |
  'description___childMarkdownRemark___internal___contentDigest' |
  'description___childMarkdownRemark___internal___description' |
  'description___childMarkdownRemark___internal___fieldOwners' |
  'description___childMarkdownRemark___internal___ignoreType' |
  'description___childMarkdownRemark___internal___mediaType' |
  'description___childMarkdownRemark___internal___owner' |
  'description___childMarkdownRemark___internal___type' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'soundCloudUrl' |
  'body___id' |
  'body___parent___id' |
  'body___parent___parent___id' |
  'body___parent___parent___children' |
  'body___parent___children' |
  'body___parent___children___id' |
  'body___parent___children___children' |
  'body___parent___internal___content' |
  'body___parent___internal___contentDigest' |
  'body___parent___internal___description' |
  'body___parent___internal___fieldOwners' |
  'body___parent___internal___ignoreType' |
  'body___parent___internal___mediaType' |
  'body___parent___internal___owner' |
  'body___parent___internal___type' |
  'body___children' |
  'body___children___id' |
  'body___children___parent___id' |
  'body___children___parent___children' |
  'body___children___children' |
  'body___children___children___id' |
  'body___children___children___children' |
  'body___children___internal___content' |
  'body___children___internal___contentDigest' |
  'body___children___internal___description' |
  'body___children___internal___fieldOwners' |
  'body___children___internal___ignoreType' |
  'body___children___internal___mediaType' |
  'body___children___internal___owner' |
  'body___children___internal___type' |
  'body___internal___content' |
  'body___internal___contentDigest' |
  'body___internal___description' |
  'body___internal___fieldOwners' |
  'body___internal___ignoreType' |
  'body___internal___mediaType' |
  'body___internal___owner' |
  'body___internal___type' |
  'body___body' |
  'body___childMarkdownRemark___id' |
  'body___childMarkdownRemark___frontmatter___title' |
  'body___childMarkdownRemark___excerpt' |
  'body___childMarkdownRemark___rawMarkdownBody' |
  'body___childMarkdownRemark___html' |
  'body___childMarkdownRemark___htmlAst' |
  'body___childMarkdownRemark___excerptAst' |
  'body___childMarkdownRemark___headings' |
  'body___childMarkdownRemark___headings___value' |
  'body___childMarkdownRemark___headings___depth' |
  'body___childMarkdownRemark___timeToRead' |
  'body___childMarkdownRemark___tableOfContents' |
  'body___childMarkdownRemark___wordCount___paragraphs' |
  'body___childMarkdownRemark___wordCount___sentences' |
  'body___childMarkdownRemark___wordCount___words' |
  'body___childMarkdownRemark___parent___id' |
  'body___childMarkdownRemark___parent___children' |
  'body___childMarkdownRemark___children' |
  'body___childMarkdownRemark___children___id' |
  'body___childMarkdownRemark___children___children' |
  'body___childMarkdownRemark___internal___content' |
  'body___childMarkdownRemark___internal___contentDigest' |
  'body___childMarkdownRemark___internal___description' |
  'body___childMarkdownRemark___internal___fieldOwners' |
  'body___childMarkdownRemark___internal___ignoreType' |
  'body___childMarkdownRemark___internal___mediaType' |
  'body___childMarkdownRemark___internal___owner' |
  'body___childMarkdownRemark___internal___type' |
  'childContentfulArticleDescriptionTextNode___id' |
  'childContentfulArticleDescriptionTextNode___parent___id' |
  'childContentfulArticleDescriptionTextNode___parent___parent___id' |
  'childContentfulArticleDescriptionTextNode___parent___parent___children' |
  'childContentfulArticleDescriptionTextNode___parent___children' |
  'childContentfulArticleDescriptionTextNode___parent___children___id' |
  'childContentfulArticleDescriptionTextNode___parent___children___children' |
  'childContentfulArticleDescriptionTextNode___parent___internal___content' |
  'childContentfulArticleDescriptionTextNode___parent___internal___contentDigest' |
  'childContentfulArticleDescriptionTextNode___parent___internal___description' |
  'childContentfulArticleDescriptionTextNode___parent___internal___fieldOwners' |
  'childContentfulArticleDescriptionTextNode___parent___internal___ignoreType' |
  'childContentfulArticleDescriptionTextNode___parent___internal___mediaType' |
  'childContentfulArticleDescriptionTextNode___parent___internal___owner' |
  'childContentfulArticleDescriptionTextNode___parent___internal___type' |
  'childContentfulArticleDescriptionTextNode___children' |
  'childContentfulArticleDescriptionTextNode___children___id' |
  'childContentfulArticleDescriptionTextNode___children___parent___id' |
  'childContentfulArticleDescriptionTextNode___children___parent___children' |
  'childContentfulArticleDescriptionTextNode___children___children' |
  'childContentfulArticleDescriptionTextNode___children___children___id' |
  'childContentfulArticleDescriptionTextNode___children___children___children' |
  'childContentfulArticleDescriptionTextNode___children___internal___content' |
  'childContentfulArticleDescriptionTextNode___children___internal___contentDigest' |
  'childContentfulArticleDescriptionTextNode___children___internal___description' |
  'childContentfulArticleDescriptionTextNode___children___internal___fieldOwners' |
  'childContentfulArticleDescriptionTextNode___children___internal___ignoreType' |
  'childContentfulArticleDescriptionTextNode___children___internal___mediaType' |
  'childContentfulArticleDescriptionTextNode___children___internal___owner' |
  'childContentfulArticleDescriptionTextNode___children___internal___type' |
  'childContentfulArticleDescriptionTextNode___internal___content' |
  'childContentfulArticleDescriptionTextNode___internal___contentDigest' |
  'childContentfulArticleDescriptionTextNode___internal___description' |
  'childContentfulArticleDescriptionTextNode___internal___fieldOwners' |
  'childContentfulArticleDescriptionTextNode___internal___ignoreType' |
  'childContentfulArticleDescriptionTextNode___internal___mediaType' |
  'childContentfulArticleDescriptionTextNode___internal___owner' |
  'childContentfulArticleDescriptionTextNode___internal___type' |
  'childContentfulArticleDescriptionTextNode___description' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___id' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___frontmatter___title' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___excerpt' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___html' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___htmlAst' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___excerptAst' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___headings' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___headings___value' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___headings___depth' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___timeToRead' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___tableOfContents' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___wordCount___sentences' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___wordCount___words' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___parent___id' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___parent___children' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___children' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___children___id' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___children___children' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___internal___content' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___internal___contentDigest' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___internal___description' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___internal___ignoreType' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___internal___mediaType' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___internal___owner' |
  'childContentfulArticleDescriptionTextNode___childMarkdownRemark___internal___type' |
  'childContentfulArticleBodyTextNode___id' |
  'childContentfulArticleBodyTextNode___parent___id' |
  'childContentfulArticleBodyTextNode___parent___parent___id' |
  'childContentfulArticleBodyTextNode___parent___parent___children' |
  'childContentfulArticleBodyTextNode___parent___children' |
  'childContentfulArticleBodyTextNode___parent___children___id' |
  'childContentfulArticleBodyTextNode___parent___children___children' |
  'childContentfulArticleBodyTextNode___parent___internal___content' |
  'childContentfulArticleBodyTextNode___parent___internal___contentDigest' |
  'childContentfulArticleBodyTextNode___parent___internal___description' |
  'childContentfulArticleBodyTextNode___parent___internal___fieldOwners' |
  'childContentfulArticleBodyTextNode___parent___internal___ignoreType' |
  'childContentfulArticleBodyTextNode___parent___internal___mediaType' |
  'childContentfulArticleBodyTextNode___parent___internal___owner' |
  'childContentfulArticleBodyTextNode___parent___internal___type' |
  'childContentfulArticleBodyTextNode___children' |
  'childContentfulArticleBodyTextNode___children___id' |
  'childContentfulArticleBodyTextNode___children___parent___id' |
  'childContentfulArticleBodyTextNode___children___parent___children' |
  'childContentfulArticleBodyTextNode___children___children' |
  'childContentfulArticleBodyTextNode___children___children___id' |
  'childContentfulArticleBodyTextNode___children___children___children' |
  'childContentfulArticleBodyTextNode___children___internal___content' |
  'childContentfulArticleBodyTextNode___children___internal___contentDigest' |
  'childContentfulArticleBodyTextNode___children___internal___description' |
  'childContentfulArticleBodyTextNode___children___internal___fieldOwners' |
  'childContentfulArticleBodyTextNode___children___internal___ignoreType' |
  'childContentfulArticleBodyTextNode___children___internal___mediaType' |
  'childContentfulArticleBodyTextNode___children___internal___owner' |
  'childContentfulArticleBodyTextNode___children___internal___type' |
  'childContentfulArticleBodyTextNode___internal___content' |
  'childContentfulArticleBodyTextNode___internal___contentDigest' |
  'childContentfulArticleBodyTextNode___internal___description' |
  'childContentfulArticleBodyTextNode___internal___fieldOwners' |
  'childContentfulArticleBodyTextNode___internal___ignoreType' |
  'childContentfulArticleBodyTextNode___internal___mediaType' |
  'childContentfulArticleBodyTextNode___internal___owner' |
  'childContentfulArticleBodyTextNode___internal___type' |
  'childContentfulArticleBodyTextNode___body' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___id' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___frontmatter___title' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___excerpt' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___html' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___htmlAst' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___excerptAst' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___headings' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___headings___value' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___headings___depth' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___timeToRead' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___tableOfContents' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___wordCount___sentences' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___wordCount___words' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___parent___id' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___parent___children' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___children' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___children___id' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___children___children' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___internal___content' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___internal___contentDigest' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___internal___description' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___internal___ignoreType' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___internal___mediaType' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___internal___owner' |
  'childContentfulArticleBodyTextNode___childMarkdownRemark___internal___type';

export type ContentfulArticleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  repositoryName?: Maybe<StringQueryOperatorInput>,
  publishDate?: Maybe<DateQueryOperatorInput>,
  category?: Maybe<ContentfulCategoryFilterInput>,
  heroImage?: Maybe<ContentfulAssetFilterInput>,
  author?: Maybe<ContentfulPersonFilterInput>,
  description?: Maybe<ContentfulArticleDescriptionTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulArticleSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  soundCloudUrl?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<ContentfulArticleBodyTextNodeFilterInput>,
  childContentfulArticleDescriptionTextNode?: Maybe<ContentfulArticleDescriptionTextNodeFilterInput>,
  childContentfulArticleBodyTextNode?: Maybe<ContentfulArticleBodyTextNodeFilterInput>,
};

export type ContentfulArticleFilterListInput = {
  elemMatch?: Maybe<ContentfulArticleFilterInput>,
};

export type ContentfulArticleGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulArticleEdge>,
  nodes: Array<ContentfulArticle>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulArticleSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulArticleFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulArticleSys = {
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulArticleSysContentType>,
};

export type ContentfulArticleSysContentType = {
  sys?: Maybe<ContentfulArticleSysContentTypeSys>,
};

export type ContentfulArticleSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulArticleSysContentTypeSysFilterInput>,
};

export type ContentfulArticleSysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulArticleSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulArticleSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulArticleSysContentTypeFilterInput>,
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  contentful_id?: Maybe<Scalars['String']>,
  file?: Maybe<ContentfulAssetFile>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  node_locale?: Maybe<Scalars['String']>,
  fixed?: Maybe<ContentfulFixed>,
  resolutions?: Maybe<ContentfulResolutions>,
  fluid?: Maybe<ContentfulFluid>,
  sizes?: Maybe<ContentfulSizes>,
  resize?: Maybe<ContentfulResize>,
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  toFormat?: Maybe<ContentfulImageFormat>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulAssetEdge>,
  nodes: Array<ContentfulAsset>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulAssetGroupConnection>,
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulAssetFieldsEnum
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>,
  node: ContentfulAsset,
  previous?: Maybe<ContentfulAsset>,
};

export type ContentfulAssetFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'contentful_id' |
  'file___url' |
  'file___details___size' |
  'file___details___image___width' |
  'file___details___image___height' |
  'file___fileName' |
  'file___contentType' |
  'title' |
  'description' |
  'node_locale' |
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'resize___base64' |
  'resize___tracedSVG' |
  'resize___src' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>,
  details?: Maybe<ContentfulAssetFileDetails>,
  fileName?: Maybe<Scalars['String']>,
  contentType?: Maybe<Scalars['String']>,
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>,
  image?: Maybe<ContentfulAssetFileDetailsImage>,
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>,
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>,
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>,
  fileName?: Maybe<StringQueryOperatorInput>,
  contentType?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  file?: Maybe<ContentfulAssetFileFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ContentfulFixedFilterInput>,
  resolutions?: Maybe<ContentfulResolutionsFilterInput>,
  fluid?: Maybe<ContentfulFluidFilterInput>,
  sizes?: Maybe<ContentfulSizesFilterInput>,
  resize?: Maybe<ContentfulResizeFilterInput>,
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulAssetEdge>,
  nodes: Array<ContentfulAsset>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulCategory = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  key?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  colour?: Maybe<Scalars['String']>,
  article?: Maybe<Array<Maybe<ContentfulArticle>>>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulCategorySys>,
  node_locale?: Maybe<Scalars['String']>,
};


export type ContentfulCategoryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulCategoryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulCategoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulCategoryEdge>,
  nodes: Array<ContentfulCategory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulCategoryGroupConnection>,
};


export type ContentfulCategoryConnectionDistinctArgs = {
  field: ContentfulCategoryFieldsEnum
};


export type ContentfulCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulCategoryFieldsEnum
};

export type ContentfulCategoryEdge = {
  next?: Maybe<ContentfulCategory>,
  node: ContentfulCategory,
  previous?: Maybe<ContentfulCategory>,
};

export type ContentfulCategoryFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'key' |
  'label' |
  'colour' |
  'article' |
  'article___id' |
  'article___parent___id' |
  'article___parent___parent___id' |
  'article___parent___parent___children' |
  'article___parent___children' |
  'article___parent___children___id' |
  'article___parent___children___children' |
  'article___parent___internal___content' |
  'article___parent___internal___contentDigest' |
  'article___parent___internal___description' |
  'article___parent___internal___fieldOwners' |
  'article___parent___internal___ignoreType' |
  'article___parent___internal___mediaType' |
  'article___parent___internal___owner' |
  'article___parent___internal___type' |
  'article___children' |
  'article___children___id' |
  'article___children___parent___id' |
  'article___children___parent___children' |
  'article___children___children' |
  'article___children___children___id' |
  'article___children___children___children' |
  'article___children___internal___content' |
  'article___children___internal___contentDigest' |
  'article___children___internal___description' |
  'article___children___internal___fieldOwners' |
  'article___children___internal___ignoreType' |
  'article___children___internal___mediaType' |
  'article___children___internal___owner' |
  'article___children___internal___type' |
  'article___internal___content' |
  'article___internal___contentDigest' |
  'article___internal___description' |
  'article___internal___fieldOwners' |
  'article___internal___ignoreType' |
  'article___internal___mediaType' |
  'article___internal___owner' |
  'article___internal___type' |
  'article___title' |
  'article___slug' |
  'article___repositoryName' |
  'article___publishDate' |
  'article___category___id' |
  'article___category___parent___id' |
  'article___category___parent___children' |
  'article___category___children' |
  'article___category___children___id' |
  'article___category___children___children' |
  'article___category___internal___content' |
  'article___category___internal___contentDigest' |
  'article___category___internal___description' |
  'article___category___internal___fieldOwners' |
  'article___category___internal___ignoreType' |
  'article___category___internal___mediaType' |
  'article___category___internal___owner' |
  'article___category___internal___type' |
  'article___category___key' |
  'article___category___label' |
  'article___category___colour' |
  'article___category___article' |
  'article___category___article___id' |
  'article___category___article___children' |
  'article___category___article___title' |
  'article___category___article___slug' |
  'article___category___article___repositoryName' |
  'article___category___article___publishDate' |
  'article___category___article___spaceId' |
  'article___category___article___contentful_id' |
  'article___category___article___createdAt' |
  'article___category___article___updatedAt' |
  'article___category___article___node_locale' |
  'article___category___article___soundCloudUrl' |
  'article___category___spaceId' |
  'article___category___contentful_id' |
  'article___category___createdAt' |
  'article___category___updatedAt' |
  'article___category___sys___revision' |
  'article___category___node_locale' |
  'article___heroImage___id' |
  'article___heroImage___parent___id' |
  'article___heroImage___parent___children' |
  'article___heroImage___children' |
  'article___heroImage___children___id' |
  'article___heroImage___children___children' |
  'article___heroImage___internal___content' |
  'article___heroImage___internal___contentDigest' |
  'article___heroImage___internal___description' |
  'article___heroImage___internal___fieldOwners' |
  'article___heroImage___internal___ignoreType' |
  'article___heroImage___internal___mediaType' |
  'article___heroImage___internal___owner' |
  'article___heroImage___internal___type' |
  'article___heroImage___contentful_id' |
  'article___heroImage___file___url' |
  'article___heroImage___file___fileName' |
  'article___heroImage___file___contentType' |
  'article___heroImage___title' |
  'article___heroImage___description' |
  'article___heroImage___node_locale' |
  'article___heroImage___fixed___base64' |
  'article___heroImage___fixed___tracedSVG' |
  'article___heroImage___fixed___aspectRatio' |
  'article___heroImage___fixed___width' |
  'article___heroImage___fixed___height' |
  'article___heroImage___fixed___src' |
  'article___heroImage___fixed___srcSet' |
  'article___heroImage___fixed___srcWebp' |
  'article___heroImage___fixed___srcSetWebp' |
  'article___heroImage___resolutions___base64' |
  'article___heroImage___resolutions___tracedSVG' |
  'article___heroImage___resolutions___aspectRatio' |
  'article___heroImage___resolutions___width' |
  'article___heroImage___resolutions___height' |
  'article___heroImage___resolutions___src' |
  'article___heroImage___resolutions___srcSet' |
  'article___heroImage___resolutions___srcWebp' |
  'article___heroImage___resolutions___srcSetWebp' |
  'article___heroImage___fluid___base64' |
  'article___heroImage___fluid___tracedSVG' |
  'article___heroImage___fluid___aspectRatio' |
  'article___heroImage___fluid___src' |
  'article___heroImage___fluid___srcSet' |
  'article___heroImage___fluid___srcWebp' |
  'article___heroImage___fluid___srcSetWebp' |
  'article___heroImage___fluid___sizes' |
  'article___heroImage___sizes___base64' |
  'article___heroImage___sizes___tracedSVG' |
  'article___heroImage___sizes___aspectRatio' |
  'article___heroImage___sizes___src' |
  'article___heroImage___sizes___srcSet' |
  'article___heroImage___sizes___srcWebp' |
  'article___heroImage___sizes___srcSetWebp' |
  'article___heroImage___sizes___sizes' |
  'article___heroImage___resize___base64' |
  'article___heroImage___resize___tracedSVG' |
  'article___heroImage___resize___src' |
  'article___heroImage___resize___width' |
  'article___heroImage___resize___height' |
  'article___heroImage___resize___aspectRatio' |
  'article___author___id' |
  'article___author___parent___id' |
  'article___author___parent___children' |
  'article___author___children' |
  'article___author___children___id' |
  'article___author___children___children' |
  'article___author___internal___content' |
  'article___author___internal___contentDigest' |
  'article___author___internal___description' |
  'article___author___internal___fieldOwners' |
  'article___author___internal___ignoreType' |
  'article___author___internal___mediaType' |
  'article___author___internal___owner' |
  'article___author___internal___type' |
  'article___author___name' |
  'article___author___email' |
  'article___author___facebook' |
  'article___author___twitter' |
  'article___author___image___id' |
  'article___author___image___children' |
  'article___author___image___contentful_id' |
  'article___author___image___title' |
  'article___author___image___description' |
  'article___author___image___node_locale' |
  'article___author___article' |
  'article___author___article___id' |
  'article___author___article___children' |
  'article___author___article___title' |
  'article___author___article___slug' |
  'article___author___article___repositoryName' |
  'article___author___article___publishDate' |
  'article___author___article___spaceId' |
  'article___author___article___contentful_id' |
  'article___author___article___createdAt' |
  'article___author___article___updatedAt' |
  'article___author___article___node_locale' |
  'article___author___article___soundCloudUrl' |
  'article___author___shortBio___id' |
  'article___author___shortBio___children' |
  'article___author___shortBio___shortBio' |
  'article___author___spaceId' |
  'article___author___contentful_id' |
  'article___author___createdAt' |
  'article___author___updatedAt' |
  'article___author___sys___revision' |
  'article___author___node_locale' |
  'article___author___childContentfulPersonShortBioTextNode___id' |
  'article___author___childContentfulPersonShortBioTextNode___children' |
  'article___author___childContentfulPersonShortBioTextNode___shortBio' |
  'article___description___id' |
  'article___description___parent___id' |
  'article___description___parent___children' |
  'article___description___children' |
  'article___description___children___id' |
  'article___description___children___children' |
  'article___description___internal___content' |
  'article___description___internal___contentDigest' |
  'article___description___internal___description' |
  'article___description___internal___fieldOwners' |
  'article___description___internal___ignoreType' |
  'article___description___internal___mediaType' |
  'article___description___internal___owner' |
  'article___description___internal___type' |
  'article___description___description' |
  'article___description___childMarkdownRemark___id' |
  'article___description___childMarkdownRemark___excerpt' |
  'article___description___childMarkdownRemark___rawMarkdownBody' |
  'article___description___childMarkdownRemark___html' |
  'article___description___childMarkdownRemark___htmlAst' |
  'article___description___childMarkdownRemark___excerptAst' |
  'article___description___childMarkdownRemark___headings' |
  'article___description___childMarkdownRemark___timeToRead' |
  'article___description___childMarkdownRemark___tableOfContents' |
  'article___description___childMarkdownRemark___children' |
  'article___spaceId' |
  'article___contentful_id' |
  'article___createdAt' |
  'article___updatedAt' |
  'article___sys___revision' |
  'article___node_locale' |
  'article___soundCloudUrl' |
  'article___body___id' |
  'article___body___parent___id' |
  'article___body___parent___children' |
  'article___body___children' |
  'article___body___children___id' |
  'article___body___children___children' |
  'article___body___internal___content' |
  'article___body___internal___contentDigest' |
  'article___body___internal___description' |
  'article___body___internal___fieldOwners' |
  'article___body___internal___ignoreType' |
  'article___body___internal___mediaType' |
  'article___body___internal___owner' |
  'article___body___internal___type' |
  'article___body___body' |
  'article___body___childMarkdownRemark___id' |
  'article___body___childMarkdownRemark___excerpt' |
  'article___body___childMarkdownRemark___rawMarkdownBody' |
  'article___body___childMarkdownRemark___html' |
  'article___body___childMarkdownRemark___htmlAst' |
  'article___body___childMarkdownRemark___excerptAst' |
  'article___body___childMarkdownRemark___headings' |
  'article___body___childMarkdownRemark___timeToRead' |
  'article___body___childMarkdownRemark___tableOfContents' |
  'article___body___childMarkdownRemark___children' |
  'article___childContentfulArticleDescriptionTextNode___id' |
  'article___childContentfulArticleDescriptionTextNode___parent___id' |
  'article___childContentfulArticleDescriptionTextNode___parent___children' |
  'article___childContentfulArticleDescriptionTextNode___children' |
  'article___childContentfulArticleDescriptionTextNode___children___id' |
  'article___childContentfulArticleDescriptionTextNode___children___children' |
  'article___childContentfulArticleDescriptionTextNode___internal___content' |
  'article___childContentfulArticleDescriptionTextNode___internal___contentDigest' |
  'article___childContentfulArticleDescriptionTextNode___internal___description' |
  'article___childContentfulArticleDescriptionTextNode___internal___fieldOwners' |
  'article___childContentfulArticleDescriptionTextNode___internal___ignoreType' |
  'article___childContentfulArticleDescriptionTextNode___internal___mediaType' |
  'article___childContentfulArticleDescriptionTextNode___internal___owner' |
  'article___childContentfulArticleDescriptionTextNode___internal___type' |
  'article___childContentfulArticleDescriptionTextNode___description' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___id' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___excerpt' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___rawMarkdownBody' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___html' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___htmlAst' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___excerptAst' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___headings' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___timeToRead' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___tableOfContents' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___children' |
  'article___childContentfulArticleBodyTextNode___id' |
  'article___childContentfulArticleBodyTextNode___parent___id' |
  'article___childContentfulArticleBodyTextNode___parent___children' |
  'article___childContentfulArticleBodyTextNode___children' |
  'article___childContentfulArticleBodyTextNode___children___id' |
  'article___childContentfulArticleBodyTextNode___children___children' |
  'article___childContentfulArticleBodyTextNode___internal___content' |
  'article___childContentfulArticleBodyTextNode___internal___contentDigest' |
  'article___childContentfulArticleBodyTextNode___internal___description' |
  'article___childContentfulArticleBodyTextNode___internal___fieldOwners' |
  'article___childContentfulArticleBodyTextNode___internal___ignoreType' |
  'article___childContentfulArticleBodyTextNode___internal___mediaType' |
  'article___childContentfulArticleBodyTextNode___internal___owner' |
  'article___childContentfulArticleBodyTextNode___internal___type' |
  'article___childContentfulArticleBodyTextNode___body' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___id' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___excerpt' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___rawMarkdownBody' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___html' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___htmlAst' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___excerptAst' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___headings' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___timeToRead' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___tableOfContents' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___children' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale';

export type ContentfulCategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  key?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  colour?: Maybe<StringQueryOperatorInput>,
  article?: Maybe<ContentfulArticleFilterListInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulCategorySysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulCategoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulCategoryEdge>,
  nodes: Array<ContentfulCategory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulCategorySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCategoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulCategorySys = {
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulCategorySysContentType>,
};

export type ContentfulCategorySysContentType = {
  sys?: Maybe<ContentfulCategorySysContentTypeSys>,
};

export type ContentfulCategorySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCategorySysContentTypeSysFilterInput>,
};

export type ContentfulCategorySysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulCategorySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulCategorySysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulCategorySysContentTypeFilterInput>,
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  displayField?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulContentTypeEdge>,
  nodes: Array<ContentfulContentType>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulContentTypeGroupConnection>,
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulContentTypeFieldsEnum
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>,
  node: ContentfulContentType,
  previous?: Maybe<ContentfulContentType>,
};

export type ContentfulContentTypeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'displayField' |
  'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  displayField?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulContentTypeEdge>,
  nodes: Array<ContentfulContentType>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulImageCropFocus = 
  'TOP' |
  'TOP_LEFT' |
  'TOP_RIGHT' |
  'BOTTOM' |
  'BOTTOM_RIGHT' |
  'BOTTOM_LEFT' |
  'RIGHT' |
  'LEFT' |
  'FACE' |
  'FACES' |
  'CENTER';

export type ContentfulImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ContentfulPage = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  heroImage?: Maybe<ContentfulAsset>,
  body?: Maybe<ContentfulPageBodyTextNode>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulPageSys>,
  node_locale?: Maybe<Scalars['String']>,
  childContentfulPageBodyTextNode?: Maybe<ContentfulPageBodyTextNode>,
};


export type ContentfulPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulPageBodyTextNode = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  body?: Maybe<Scalars['String']>,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
};

export type ContentfulPageBodyTextNodeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulPageBodyTextNodeEdge>,
  nodes: Array<ContentfulPageBodyTextNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulPageBodyTextNodeGroupConnection>,
};


export type ContentfulPageBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulPageBodyTextNodeFieldsEnum
};


export type ContentfulPageBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulPageBodyTextNodeFieldsEnum
};

export type ContentfulPageBodyTextNodeEdge = {
  next?: Maybe<ContentfulPageBodyTextNode>,
  node: ContentfulPageBodyTextNode,
  previous?: Maybe<ContentfulPageBodyTextNode>,
};

export type ContentfulPageBodyTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'body' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type ContentfulPageBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
};

export type ContentfulPageBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulPageBodyTextNodeEdge>,
  nodes: Array<ContentfulPageBodyTextNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulPageBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageBodyTextNodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulPageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulPageEdge>,
  nodes: Array<ContentfulPage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulPageGroupConnection>,
};


export type ContentfulPageConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum
};


export type ContentfulPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulPageFieldsEnum
};

export type ContentfulPageEdge = {
  next?: Maybe<ContentfulPage>,
  node: ContentfulPage,
  previous?: Maybe<ContentfulPage>,
};

export type ContentfulPageFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'heroImage___id' |
  'heroImage___parent___id' |
  'heroImage___parent___parent___id' |
  'heroImage___parent___parent___children' |
  'heroImage___parent___children' |
  'heroImage___parent___children___id' |
  'heroImage___parent___children___children' |
  'heroImage___parent___internal___content' |
  'heroImage___parent___internal___contentDigest' |
  'heroImage___parent___internal___description' |
  'heroImage___parent___internal___fieldOwners' |
  'heroImage___parent___internal___ignoreType' |
  'heroImage___parent___internal___mediaType' |
  'heroImage___parent___internal___owner' |
  'heroImage___parent___internal___type' |
  'heroImage___children' |
  'heroImage___children___id' |
  'heroImage___children___parent___id' |
  'heroImage___children___parent___children' |
  'heroImage___children___children' |
  'heroImage___children___children___id' |
  'heroImage___children___children___children' |
  'heroImage___children___internal___content' |
  'heroImage___children___internal___contentDigest' |
  'heroImage___children___internal___description' |
  'heroImage___children___internal___fieldOwners' |
  'heroImage___children___internal___ignoreType' |
  'heroImage___children___internal___mediaType' |
  'heroImage___children___internal___owner' |
  'heroImage___children___internal___type' |
  'heroImage___internal___content' |
  'heroImage___internal___contentDigest' |
  'heroImage___internal___description' |
  'heroImage___internal___fieldOwners' |
  'heroImage___internal___ignoreType' |
  'heroImage___internal___mediaType' |
  'heroImage___internal___owner' |
  'heroImage___internal___type' |
  'heroImage___contentful_id' |
  'heroImage___file___url' |
  'heroImage___file___details___size' |
  'heroImage___file___fileName' |
  'heroImage___file___contentType' |
  'heroImage___title' |
  'heroImage___description' |
  'heroImage___node_locale' |
  'heroImage___fixed___base64' |
  'heroImage___fixed___tracedSVG' |
  'heroImage___fixed___aspectRatio' |
  'heroImage___fixed___width' |
  'heroImage___fixed___height' |
  'heroImage___fixed___src' |
  'heroImage___fixed___srcSet' |
  'heroImage___fixed___srcWebp' |
  'heroImage___fixed___srcSetWebp' |
  'heroImage___resolutions___base64' |
  'heroImage___resolutions___tracedSVG' |
  'heroImage___resolutions___aspectRatio' |
  'heroImage___resolutions___width' |
  'heroImage___resolutions___height' |
  'heroImage___resolutions___src' |
  'heroImage___resolutions___srcSet' |
  'heroImage___resolutions___srcWebp' |
  'heroImage___resolutions___srcSetWebp' |
  'heroImage___fluid___base64' |
  'heroImage___fluid___tracedSVG' |
  'heroImage___fluid___aspectRatio' |
  'heroImage___fluid___src' |
  'heroImage___fluid___srcSet' |
  'heroImage___fluid___srcWebp' |
  'heroImage___fluid___srcSetWebp' |
  'heroImage___fluid___sizes' |
  'heroImage___sizes___base64' |
  'heroImage___sizes___tracedSVG' |
  'heroImage___sizes___aspectRatio' |
  'heroImage___sizes___src' |
  'heroImage___sizes___srcSet' |
  'heroImage___sizes___srcWebp' |
  'heroImage___sizes___srcSetWebp' |
  'heroImage___sizes___sizes' |
  'heroImage___resize___base64' |
  'heroImage___resize___tracedSVG' |
  'heroImage___resize___src' |
  'heroImage___resize___width' |
  'heroImage___resize___height' |
  'heroImage___resize___aspectRatio' |
  'body___id' |
  'body___parent___id' |
  'body___parent___parent___id' |
  'body___parent___parent___children' |
  'body___parent___children' |
  'body___parent___children___id' |
  'body___parent___children___children' |
  'body___parent___internal___content' |
  'body___parent___internal___contentDigest' |
  'body___parent___internal___description' |
  'body___parent___internal___fieldOwners' |
  'body___parent___internal___ignoreType' |
  'body___parent___internal___mediaType' |
  'body___parent___internal___owner' |
  'body___parent___internal___type' |
  'body___children' |
  'body___children___id' |
  'body___children___parent___id' |
  'body___children___parent___children' |
  'body___children___children' |
  'body___children___children___id' |
  'body___children___children___children' |
  'body___children___internal___content' |
  'body___children___internal___contentDigest' |
  'body___children___internal___description' |
  'body___children___internal___fieldOwners' |
  'body___children___internal___ignoreType' |
  'body___children___internal___mediaType' |
  'body___children___internal___owner' |
  'body___children___internal___type' |
  'body___internal___content' |
  'body___internal___contentDigest' |
  'body___internal___description' |
  'body___internal___fieldOwners' |
  'body___internal___ignoreType' |
  'body___internal___mediaType' |
  'body___internal___owner' |
  'body___internal___type' |
  'body___body' |
  'body___childMarkdownRemark___id' |
  'body___childMarkdownRemark___frontmatter___title' |
  'body___childMarkdownRemark___excerpt' |
  'body___childMarkdownRemark___rawMarkdownBody' |
  'body___childMarkdownRemark___html' |
  'body___childMarkdownRemark___htmlAst' |
  'body___childMarkdownRemark___excerptAst' |
  'body___childMarkdownRemark___headings' |
  'body___childMarkdownRemark___headings___value' |
  'body___childMarkdownRemark___headings___depth' |
  'body___childMarkdownRemark___timeToRead' |
  'body___childMarkdownRemark___tableOfContents' |
  'body___childMarkdownRemark___wordCount___paragraphs' |
  'body___childMarkdownRemark___wordCount___sentences' |
  'body___childMarkdownRemark___wordCount___words' |
  'body___childMarkdownRemark___parent___id' |
  'body___childMarkdownRemark___parent___children' |
  'body___childMarkdownRemark___children' |
  'body___childMarkdownRemark___children___id' |
  'body___childMarkdownRemark___children___children' |
  'body___childMarkdownRemark___internal___content' |
  'body___childMarkdownRemark___internal___contentDigest' |
  'body___childMarkdownRemark___internal___description' |
  'body___childMarkdownRemark___internal___fieldOwners' |
  'body___childMarkdownRemark___internal___ignoreType' |
  'body___childMarkdownRemark___internal___mediaType' |
  'body___childMarkdownRemark___internal___owner' |
  'body___childMarkdownRemark___internal___type' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'childContentfulPageBodyTextNode___id' |
  'childContentfulPageBodyTextNode___parent___id' |
  'childContentfulPageBodyTextNode___parent___parent___id' |
  'childContentfulPageBodyTextNode___parent___parent___children' |
  'childContentfulPageBodyTextNode___parent___children' |
  'childContentfulPageBodyTextNode___parent___children___id' |
  'childContentfulPageBodyTextNode___parent___children___children' |
  'childContentfulPageBodyTextNode___parent___internal___content' |
  'childContentfulPageBodyTextNode___parent___internal___contentDigest' |
  'childContentfulPageBodyTextNode___parent___internal___description' |
  'childContentfulPageBodyTextNode___parent___internal___fieldOwners' |
  'childContentfulPageBodyTextNode___parent___internal___ignoreType' |
  'childContentfulPageBodyTextNode___parent___internal___mediaType' |
  'childContentfulPageBodyTextNode___parent___internal___owner' |
  'childContentfulPageBodyTextNode___parent___internal___type' |
  'childContentfulPageBodyTextNode___children' |
  'childContentfulPageBodyTextNode___children___id' |
  'childContentfulPageBodyTextNode___children___parent___id' |
  'childContentfulPageBodyTextNode___children___parent___children' |
  'childContentfulPageBodyTextNode___children___children' |
  'childContentfulPageBodyTextNode___children___children___id' |
  'childContentfulPageBodyTextNode___children___children___children' |
  'childContentfulPageBodyTextNode___children___internal___content' |
  'childContentfulPageBodyTextNode___children___internal___contentDigest' |
  'childContentfulPageBodyTextNode___children___internal___description' |
  'childContentfulPageBodyTextNode___children___internal___fieldOwners' |
  'childContentfulPageBodyTextNode___children___internal___ignoreType' |
  'childContentfulPageBodyTextNode___children___internal___mediaType' |
  'childContentfulPageBodyTextNode___children___internal___owner' |
  'childContentfulPageBodyTextNode___children___internal___type' |
  'childContentfulPageBodyTextNode___internal___content' |
  'childContentfulPageBodyTextNode___internal___contentDigest' |
  'childContentfulPageBodyTextNode___internal___description' |
  'childContentfulPageBodyTextNode___internal___fieldOwners' |
  'childContentfulPageBodyTextNode___internal___ignoreType' |
  'childContentfulPageBodyTextNode___internal___mediaType' |
  'childContentfulPageBodyTextNode___internal___owner' |
  'childContentfulPageBodyTextNode___internal___type' |
  'childContentfulPageBodyTextNode___body' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___id' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___frontmatter___title' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___excerpt' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___html' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___htmlAst' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___excerptAst' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___headings' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___headings___value' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___headings___depth' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___timeToRead' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___tableOfContents' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___wordCount___sentences' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___wordCount___words' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___parent___id' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___parent___children' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___children' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___children___id' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___children___children' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___internal___content' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___internal___contentDigest' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___internal___description' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___internal___ignoreType' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___internal___mediaType' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___internal___owner' |
  'childContentfulPageBodyTextNode___childMarkdownRemark___internal___type';

export type ContentfulPageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  heroImage?: Maybe<ContentfulAssetFilterInput>,
  body?: Maybe<ContentfulPageBodyTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulPageSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  childContentfulPageBodyTextNode?: Maybe<ContentfulPageBodyTextNodeFilterInput>,
};

export type ContentfulPageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulPageEdge>,
  nodes: Array<ContentfulPage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulPageSys = {
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulPageSysContentType>,
};

export type ContentfulPageSysContentType = {
  sys?: Maybe<ContentfulPageSysContentTypeSys>,
};

export type ContentfulPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageSysContentTypeSysFilterInput>,
};

export type ContentfulPageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulPageSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulPageSysContentTypeFilterInput>,
};

export type ContentfulPerson = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  facebook?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
  image?: Maybe<ContentfulAsset>,
  article?: Maybe<Array<Maybe<ContentfulArticle>>>,
  shortBio?: Maybe<ContentfulPersonShortBioTextNode>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulPersonSys>,
  node_locale?: Maybe<Scalars['String']>,
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>,
};


export type ContentfulPersonCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulPersonUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulPersonConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulPersonEdge>,
  nodes: Array<ContentfulPerson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulPersonGroupConnection>,
};


export type ContentfulPersonConnectionDistinctArgs = {
  field: ContentfulPersonFieldsEnum
};


export type ContentfulPersonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulPersonFieldsEnum
};

export type ContentfulPersonEdge = {
  next?: Maybe<ContentfulPerson>,
  node: ContentfulPerson,
  previous?: Maybe<ContentfulPerson>,
};

export type ContentfulPersonFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'email' |
  'facebook' |
  'twitter' |
  'image___id' |
  'image___parent___id' |
  'image___parent___parent___id' |
  'image___parent___parent___children' |
  'image___parent___children' |
  'image___parent___children___id' |
  'image___parent___children___children' |
  'image___parent___internal___content' |
  'image___parent___internal___contentDigest' |
  'image___parent___internal___description' |
  'image___parent___internal___fieldOwners' |
  'image___parent___internal___ignoreType' |
  'image___parent___internal___mediaType' |
  'image___parent___internal___owner' |
  'image___parent___internal___type' |
  'image___children' |
  'image___children___id' |
  'image___children___parent___id' |
  'image___children___parent___children' |
  'image___children___children' |
  'image___children___children___id' |
  'image___children___children___children' |
  'image___children___internal___content' |
  'image___children___internal___contentDigest' |
  'image___children___internal___description' |
  'image___children___internal___fieldOwners' |
  'image___children___internal___ignoreType' |
  'image___children___internal___mediaType' |
  'image___children___internal___owner' |
  'image___children___internal___type' |
  'image___internal___content' |
  'image___internal___contentDigest' |
  'image___internal___description' |
  'image___internal___fieldOwners' |
  'image___internal___ignoreType' |
  'image___internal___mediaType' |
  'image___internal___owner' |
  'image___internal___type' |
  'image___contentful_id' |
  'image___file___url' |
  'image___file___details___size' |
  'image___file___fileName' |
  'image___file___contentType' |
  'image___title' |
  'image___description' |
  'image___node_locale' |
  'image___fixed___base64' |
  'image___fixed___tracedSVG' |
  'image___fixed___aspectRatio' |
  'image___fixed___width' |
  'image___fixed___height' |
  'image___fixed___src' |
  'image___fixed___srcSet' |
  'image___fixed___srcWebp' |
  'image___fixed___srcSetWebp' |
  'image___resolutions___base64' |
  'image___resolutions___tracedSVG' |
  'image___resolutions___aspectRatio' |
  'image___resolutions___width' |
  'image___resolutions___height' |
  'image___resolutions___src' |
  'image___resolutions___srcSet' |
  'image___resolutions___srcWebp' |
  'image___resolutions___srcSetWebp' |
  'image___fluid___base64' |
  'image___fluid___tracedSVG' |
  'image___fluid___aspectRatio' |
  'image___fluid___src' |
  'image___fluid___srcSet' |
  'image___fluid___srcWebp' |
  'image___fluid___srcSetWebp' |
  'image___fluid___sizes' |
  'image___sizes___base64' |
  'image___sizes___tracedSVG' |
  'image___sizes___aspectRatio' |
  'image___sizes___src' |
  'image___sizes___srcSet' |
  'image___sizes___srcWebp' |
  'image___sizes___srcSetWebp' |
  'image___sizes___sizes' |
  'image___resize___base64' |
  'image___resize___tracedSVG' |
  'image___resize___src' |
  'image___resize___width' |
  'image___resize___height' |
  'image___resize___aspectRatio' |
  'article' |
  'article___id' |
  'article___parent___id' |
  'article___parent___parent___id' |
  'article___parent___parent___children' |
  'article___parent___children' |
  'article___parent___children___id' |
  'article___parent___children___children' |
  'article___parent___internal___content' |
  'article___parent___internal___contentDigest' |
  'article___parent___internal___description' |
  'article___parent___internal___fieldOwners' |
  'article___parent___internal___ignoreType' |
  'article___parent___internal___mediaType' |
  'article___parent___internal___owner' |
  'article___parent___internal___type' |
  'article___children' |
  'article___children___id' |
  'article___children___parent___id' |
  'article___children___parent___children' |
  'article___children___children' |
  'article___children___children___id' |
  'article___children___children___children' |
  'article___children___internal___content' |
  'article___children___internal___contentDigest' |
  'article___children___internal___description' |
  'article___children___internal___fieldOwners' |
  'article___children___internal___ignoreType' |
  'article___children___internal___mediaType' |
  'article___children___internal___owner' |
  'article___children___internal___type' |
  'article___internal___content' |
  'article___internal___contentDigest' |
  'article___internal___description' |
  'article___internal___fieldOwners' |
  'article___internal___ignoreType' |
  'article___internal___mediaType' |
  'article___internal___owner' |
  'article___internal___type' |
  'article___title' |
  'article___slug' |
  'article___repositoryName' |
  'article___publishDate' |
  'article___category___id' |
  'article___category___parent___id' |
  'article___category___parent___children' |
  'article___category___children' |
  'article___category___children___id' |
  'article___category___children___children' |
  'article___category___internal___content' |
  'article___category___internal___contentDigest' |
  'article___category___internal___description' |
  'article___category___internal___fieldOwners' |
  'article___category___internal___ignoreType' |
  'article___category___internal___mediaType' |
  'article___category___internal___owner' |
  'article___category___internal___type' |
  'article___category___key' |
  'article___category___label' |
  'article___category___colour' |
  'article___category___article' |
  'article___category___article___id' |
  'article___category___article___children' |
  'article___category___article___title' |
  'article___category___article___slug' |
  'article___category___article___repositoryName' |
  'article___category___article___publishDate' |
  'article___category___article___spaceId' |
  'article___category___article___contentful_id' |
  'article___category___article___createdAt' |
  'article___category___article___updatedAt' |
  'article___category___article___node_locale' |
  'article___category___article___soundCloudUrl' |
  'article___category___spaceId' |
  'article___category___contentful_id' |
  'article___category___createdAt' |
  'article___category___updatedAt' |
  'article___category___sys___revision' |
  'article___category___node_locale' |
  'article___heroImage___id' |
  'article___heroImage___parent___id' |
  'article___heroImage___parent___children' |
  'article___heroImage___children' |
  'article___heroImage___children___id' |
  'article___heroImage___children___children' |
  'article___heroImage___internal___content' |
  'article___heroImage___internal___contentDigest' |
  'article___heroImage___internal___description' |
  'article___heroImage___internal___fieldOwners' |
  'article___heroImage___internal___ignoreType' |
  'article___heroImage___internal___mediaType' |
  'article___heroImage___internal___owner' |
  'article___heroImage___internal___type' |
  'article___heroImage___contentful_id' |
  'article___heroImage___file___url' |
  'article___heroImage___file___fileName' |
  'article___heroImage___file___contentType' |
  'article___heroImage___title' |
  'article___heroImage___description' |
  'article___heroImage___node_locale' |
  'article___heroImage___fixed___base64' |
  'article___heroImage___fixed___tracedSVG' |
  'article___heroImage___fixed___aspectRatio' |
  'article___heroImage___fixed___width' |
  'article___heroImage___fixed___height' |
  'article___heroImage___fixed___src' |
  'article___heroImage___fixed___srcSet' |
  'article___heroImage___fixed___srcWebp' |
  'article___heroImage___fixed___srcSetWebp' |
  'article___heroImage___resolutions___base64' |
  'article___heroImage___resolutions___tracedSVG' |
  'article___heroImage___resolutions___aspectRatio' |
  'article___heroImage___resolutions___width' |
  'article___heroImage___resolutions___height' |
  'article___heroImage___resolutions___src' |
  'article___heroImage___resolutions___srcSet' |
  'article___heroImage___resolutions___srcWebp' |
  'article___heroImage___resolutions___srcSetWebp' |
  'article___heroImage___fluid___base64' |
  'article___heroImage___fluid___tracedSVG' |
  'article___heroImage___fluid___aspectRatio' |
  'article___heroImage___fluid___src' |
  'article___heroImage___fluid___srcSet' |
  'article___heroImage___fluid___srcWebp' |
  'article___heroImage___fluid___srcSetWebp' |
  'article___heroImage___fluid___sizes' |
  'article___heroImage___sizes___base64' |
  'article___heroImage___sizes___tracedSVG' |
  'article___heroImage___sizes___aspectRatio' |
  'article___heroImage___sizes___src' |
  'article___heroImage___sizes___srcSet' |
  'article___heroImage___sizes___srcWebp' |
  'article___heroImage___sizes___srcSetWebp' |
  'article___heroImage___sizes___sizes' |
  'article___heroImage___resize___base64' |
  'article___heroImage___resize___tracedSVG' |
  'article___heroImage___resize___src' |
  'article___heroImage___resize___width' |
  'article___heroImage___resize___height' |
  'article___heroImage___resize___aspectRatio' |
  'article___author___id' |
  'article___author___parent___id' |
  'article___author___parent___children' |
  'article___author___children' |
  'article___author___children___id' |
  'article___author___children___children' |
  'article___author___internal___content' |
  'article___author___internal___contentDigest' |
  'article___author___internal___description' |
  'article___author___internal___fieldOwners' |
  'article___author___internal___ignoreType' |
  'article___author___internal___mediaType' |
  'article___author___internal___owner' |
  'article___author___internal___type' |
  'article___author___name' |
  'article___author___email' |
  'article___author___facebook' |
  'article___author___twitter' |
  'article___author___image___id' |
  'article___author___image___children' |
  'article___author___image___contentful_id' |
  'article___author___image___title' |
  'article___author___image___description' |
  'article___author___image___node_locale' |
  'article___author___article' |
  'article___author___article___id' |
  'article___author___article___children' |
  'article___author___article___title' |
  'article___author___article___slug' |
  'article___author___article___repositoryName' |
  'article___author___article___publishDate' |
  'article___author___article___spaceId' |
  'article___author___article___contentful_id' |
  'article___author___article___createdAt' |
  'article___author___article___updatedAt' |
  'article___author___article___node_locale' |
  'article___author___article___soundCloudUrl' |
  'article___author___shortBio___id' |
  'article___author___shortBio___children' |
  'article___author___shortBio___shortBio' |
  'article___author___spaceId' |
  'article___author___contentful_id' |
  'article___author___createdAt' |
  'article___author___updatedAt' |
  'article___author___sys___revision' |
  'article___author___node_locale' |
  'article___author___childContentfulPersonShortBioTextNode___id' |
  'article___author___childContentfulPersonShortBioTextNode___children' |
  'article___author___childContentfulPersonShortBioTextNode___shortBio' |
  'article___description___id' |
  'article___description___parent___id' |
  'article___description___parent___children' |
  'article___description___children' |
  'article___description___children___id' |
  'article___description___children___children' |
  'article___description___internal___content' |
  'article___description___internal___contentDigest' |
  'article___description___internal___description' |
  'article___description___internal___fieldOwners' |
  'article___description___internal___ignoreType' |
  'article___description___internal___mediaType' |
  'article___description___internal___owner' |
  'article___description___internal___type' |
  'article___description___description' |
  'article___description___childMarkdownRemark___id' |
  'article___description___childMarkdownRemark___excerpt' |
  'article___description___childMarkdownRemark___rawMarkdownBody' |
  'article___description___childMarkdownRemark___html' |
  'article___description___childMarkdownRemark___htmlAst' |
  'article___description___childMarkdownRemark___excerptAst' |
  'article___description___childMarkdownRemark___headings' |
  'article___description___childMarkdownRemark___timeToRead' |
  'article___description___childMarkdownRemark___tableOfContents' |
  'article___description___childMarkdownRemark___children' |
  'article___spaceId' |
  'article___contentful_id' |
  'article___createdAt' |
  'article___updatedAt' |
  'article___sys___revision' |
  'article___node_locale' |
  'article___soundCloudUrl' |
  'article___body___id' |
  'article___body___parent___id' |
  'article___body___parent___children' |
  'article___body___children' |
  'article___body___children___id' |
  'article___body___children___children' |
  'article___body___internal___content' |
  'article___body___internal___contentDigest' |
  'article___body___internal___description' |
  'article___body___internal___fieldOwners' |
  'article___body___internal___ignoreType' |
  'article___body___internal___mediaType' |
  'article___body___internal___owner' |
  'article___body___internal___type' |
  'article___body___body' |
  'article___body___childMarkdownRemark___id' |
  'article___body___childMarkdownRemark___excerpt' |
  'article___body___childMarkdownRemark___rawMarkdownBody' |
  'article___body___childMarkdownRemark___html' |
  'article___body___childMarkdownRemark___htmlAst' |
  'article___body___childMarkdownRemark___excerptAst' |
  'article___body___childMarkdownRemark___headings' |
  'article___body___childMarkdownRemark___timeToRead' |
  'article___body___childMarkdownRemark___tableOfContents' |
  'article___body___childMarkdownRemark___children' |
  'article___childContentfulArticleDescriptionTextNode___id' |
  'article___childContentfulArticleDescriptionTextNode___parent___id' |
  'article___childContentfulArticleDescriptionTextNode___parent___children' |
  'article___childContentfulArticleDescriptionTextNode___children' |
  'article___childContentfulArticleDescriptionTextNode___children___id' |
  'article___childContentfulArticleDescriptionTextNode___children___children' |
  'article___childContentfulArticleDescriptionTextNode___internal___content' |
  'article___childContentfulArticleDescriptionTextNode___internal___contentDigest' |
  'article___childContentfulArticleDescriptionTextNode___internal___description' |
  'article___childContentfulArticleDescriptionTextNode___internal___fieldOwners' |
  'article___childContentfulArticleDescriptionTextNode___internal___ignoreType' |
  'article___childContentfulArticleDescriptionTextNode___internal___mediaType' |
  'article___childContentfulArticleDescriptionTextNode___internal___owner' |
  'article___childContentfulArticleDescriptionTextNode___internal___type' |
  'article___childContentfulArticleDescriptionTextNode___description' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___id' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___excerpt' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___rawMarkdownBody' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___html' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___htmlAst' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___excerptAst' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___headings' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___timeToRead' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___tableOfContents' |
  'article___childContentfulArticleDescriptionTextNode___childMarkdownRemark___children' |
  'article___childContentfulArticleBodyTextNode___id' |
  'article___childContentfulArticleBodyTextNode___parent___id' |
  'article___childContentfulArticleBodyTextNode___parent___children' |
  'article___childContentfulArticleBodyTextNode___children' |
  'article___childContentfulArticleBodyTextNode___children___id' |
  'article___childContentfulArticleBodyTextNode___children___children' |
  'article___childContentfulArticleBodyTextNode___internal___content' |
  'article___childContentfulArticleBodyTextNode___internal___contentDigest' |
  'article___childContentfulArticleBodyTextNode___internal___description' |
  'article___childContentfulArticleBodyTextNode___internal___fieldOwners' |
  'article___childContentfulArticleBodyTextNode___internal___ignoreType' |
  'article___childContentfulArticleBodyTextNode___internal___mediaType' |
  'article___childContentfulArticleBodyTextNode___internal___owner' |
  'article___childContentfulArticleBodyTextNode___internal___type' |
  'article___childContentfulArticleBodyTextNode___body' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___id' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___excerpt' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___rawMarkdownBody' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___html' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___htmlAst' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___excerptAst' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___headings' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___timeToRead' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___tableOfContents' |
  'article___childContentfulArticleBodyTextNode___childMarkdownRemark___children' |
  'shortBio___id' |
  'shortBio___parent___id' |
  'shortBio___parent___parent___id' |
  'shortBio___parent___parent___children' |
  'shortBio___parent___children' |
  'shortBio___parent___children___id' |
  'shortBio___parent___children___children' |
  'shortBio___parent___internal___content' |
  'shortBio___parent___internal___contentDigest' |
  'shortBio___parent___internal___description' |
  'shortBio___parent___internal___fieldOwners' |
  'shortBio___parent___internal___ignoreType' |
  'shortBio___parent___internal___mediaType' |
  'shortBio___parent___internal___owner' |
  'shortBio___parent___internal___type' |
  'shortBio___children' |
  'shortBio___children___id' |
  'shortBio___children___parent___id' |
  'shortBio___children___parent___children' |
  'shortBio___children___children' |
  'shortBio___children___children___id' |
  'shortBio___children___children___children' |
  'shortBio___children___internal___content' |
  'shortBio___children___internal___contentDigest' |
  'shortBio___children___internal___description' |
  'shortBio___children___internal___fieldOwners' |
  'shortBio___children___internal___ignoreType' |
  'shortBio___children___internal___mediaType' |
  'shortBio___children___internal___owner' |
  'shortBio___children___internal___type' |
  'shortBio___internal___content' |
  'shortBio___internal___contentDigest' |
  'shortBio___internal___description' |
  'shortBio___internal___fieldOwners' |
  'shortBio___internal___ignoreType' |
  'shortBio___internal___mediaType' |
  'shortBio___internal___owner' |
  'shortBio___internal___type' |
  'shortBio___shortBio' |
  'shortBio___childMarkdownRemark___id' |
  'shortBio___childMarkdownRemark___frontmatter___title' |
  'shortBio___childMarkdownRemark___excerpt' |
  'shortBio___childMarkdownRemark___rawMarkdownBody' |
  'shortBio___childMarkdownRemark___html' |
  'shortBio___childMarkdownRemark___htmlAst' |
  'shortBio___childMarkdownRemark___excerptAst' |
  'shortBio___childMarkdownRemark___headings' |
  'shortBio___childMarkdownRemark___headings___value' |
  'shortBio___childMarkdownRemark___headings___depth' |
  'shortBio___childMarkdownRemark___timeToRead' |
  'shortBio___childMarkdownRemark___tableOfContents' |
  'shortBio___childMarkdownRemark___wordCount___paragraphs' |
  'shortBio___childMarkdownRemark___wordCount___sentences' |
  'shortBio___childMarkdownRemark___wordCount___words' |
  'shortBio___childMarkdownRemark___parent___id' |
  'shortBio___childMarkdownRemark___parent___children' |
  'shortBio___childMarkdownRemark___children' |
  'shortBio___childMarkdownRemark___children___id' |
  'shortBio___childMarkdownRemark___children___children' |
  'shortBio___childMarkdownRemark___internal___content' |
  'shortBio___childMarkdownRemark___internal___contentDigest' |
  'shortBio___childMarkdownRemark___internal___description' |
  'shortBio___childMarkdownRemark___internal___fieldOwners' |
  'shortBio___childMarkdownRemark___internal___ignoreType' |
  'shortBio___childMarkdownRemark___internal___mediaType' |
  'shortBio___childMarkdownRemark___internal___owner' |
  'shortBio___childMarkdownRemark___internal___type' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'childContentfulPersonShortBioTextNode___id' |
  'childContentfulPersonShortBioTextNode___parent___id' |
  'childContentfulPersonShortBioTextNode___parent___parent___id' |
  'childContentfulPersonShortBioTextNode___parent___parent___children' |
  'childContentfulPersonShortBioTextNode___parent___children' |
  'childContentfulPersonShortBioTextNode___parent___children___id' |
  'childContentfulPersonShortBioTextNode___parent___children___children' |
  'childContentfulPersonShortBioTextNode___parent___internal___content' |
  'childContentfulPersonShortBioTextNode___parent___internal___contentDigest' |
  'childContentfulPersonShortBioTextNode___parent___internal___description' |
  'childContentfulPersonShortBioTextNode___parent___internal___fieldOwners' |
  'childContentfulPersonShortBioTextNode___parent___internal___ignoreType' |
  'childContentfulPersonShortBioTextNode___parent___internal___mediaType' |
  'childContentfulPersonShortBioTextNode___parent___internal___owner' |
  'childContentfulPersonShortBioTextNode___parent___internal___type' |
  'childContentfulPersonShortBioTextNode___children' |
  'childContentfulPersonShortBioTextNode___children___id' |
  'childContentfulPersonShortBioTextNode___children___parent___id' |
  'childContentfulPersonShortBioTextNode___children___parent___children' |
  'childContentfulPersonShortBioTextNode___children___children' |
  'childContentfulPersonShortBioTextNode___children___children___id' |
  'childContentfulPersonShortBioTextNode___children___children___children' |
  'childContentfulPersonShortBioTextNode___children___internal___content' |
  'childContentfulPersonShortBioTextNode___children___internal___contentDigest' |
  'childContentfulPersonShortBioTextNode___children___internal___description' |
  'childContentfulPersonShortBioTextNode___children___internal___fieldOwners' |
  'childContentfulPersonShortBioTextNode___children___internal___ignoreType' |
  'childContentfulPersonShortBioTextNode___children___internal___mediaType' |
  'childContentfulPersonShortBioTextNode___children___internal___owner' |
  'childContentfulPersonShortBioTextNode___children___internal___type' |
  'childContentfulPersonShortBioTextNode___internal___content' |
  'childContentfulPersonShortBioTextNode___internal___contentDigest' |
  'childContentfulPersonShortBioTextNode___internal___description' |
  'childContentfulPersonShortBioTextNode___internal___fieldOwners' |
  'childContentfulPersonShortBioTextNode___internal___ignoreType' |
  'childContentfulPersonShortBioTextNode___internal___mediaType' |
  'childContentfulPersonShortBioTextNode___internal___owner' |
  'childContentfulPersonShortBioTextNode___internal___type' |
  'childContentfulPersonShortBioTextNode___shortBio' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___id' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___frontmatter___title' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___html' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___value' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___depth' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___sentences' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___words' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___parent___id' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___parent___children' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___children' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___children___id' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___children___children' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___content' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___contentDigest' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___description' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___ignoreType' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___mediaType' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___owner' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___type';

export type ContentfulPersonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  email?: Maybe<StringQueryOperatorInput>,
  facebook?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<ContentfulAssetFilterInput>,
  article?: Maybe<ContentfulArticleFilterListInput>,
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulPersonSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>,
};

export type ContentfulPersonGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulPersonEdge>,
  nodes: Array<ContentfulPerson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulPersonShortBioTextNode = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  shortBio?: Maybe<Scalars['String']>,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
};

export type ContentfulPersonShortBioTextNodeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulPersonShortBioTextNodeEdge>,
  nodes: Array<ContentfulPersonShortBioTextNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulPersonShortBioTextNodeGroupConnection>,
};


export type ContentfulPersonShortBioTextNodeConnectionDistinctArgs = {
  field: ContentfulPersonShortBioTextNodeFieldsEnum
};


export type ContentfulPersonShortBioTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulPersonShortBioTextNodeFieldsEnum
};

export type ContentfulPersonShortBioTextNodeEdge = {
  next?: Maybe<ContentfulPersonShortBioTextNode>,
  node: ContentfulPersonShortBioTextNode,
  previous?: Maybe<ContentfulPersonShortBioTextNode>,
};

export type ContentfulPersonShortBioTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'shortBio' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type ContentfulPersonShortBioTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  shortBio?: Maybe<StringQueryOperatorInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
};

export type ContentfulPersonShortBioTextNodeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulPersonShortBioTextNodeEdge>,
  nodes: Array<ContentfulPersonShortBioTextNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulPersonShortBioTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonShortBioTextNodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulPersonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulPersonSys = {
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulPersonSysContentType>,
};

export type ContentfulPersonSysContentType = {
  sys?: Maybe<ContentfulPersonSysContentTypeSys>,
};

export type ContentfulPersonSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPersonSysContentTypeSysFilterInput>,
};

export type ContentfulPersonSysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulPersonSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulPersonSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulPersonSysContentTypeFilterInput>,
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  src?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export type DirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type File = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export type FileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ImageResizingBehavior = 
  'NO_CHANGE' |
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  'PAD' |
  /** Crop a part of the original image to match the specified size. */
  'CROP' |
  /** 
 * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
 */
  'FILL' |
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  'THUMB' |
  /** Scale the image regardless of the original aspect ratio. */
  'SCALE';

export type Internal = {
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export type MarkdownExcerptFormats = 
  'PLAIN' |
  'HTML' |
  'MARKDOWN';

export type MarkdownHeading = {
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>,
};

export type MarkdownHeadingLevels = 
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'],
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>,
  excerpt?: Maybe<Scalars['String']>,
  rawMarkdownBody?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  htmlAst?: Maybe<Scalars['JSON']>,
  excerptAst?: Maybe<Scalars['JSON']>,
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>,
  timeToRead?: Maybe<Scalars['Int']>,
  tableOfContents?: Maybe<Scalars['String']>,
  wordCount?: Maybe<MarkdownWordCount>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>,
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth?: Maybe<Scalars['Int']>,
  heading?: Maybe<Scalars['String']>
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>,
  node: MarkdownRemark,
  previous?: Maybe<MarkdownRemark>,
};

export type MarkdownRemarkFieldsEnum = 
  'id' |
  'frontmatter___title' |
  'excerpt' |
  'rawMarkdownBody' |
  'html' |
  'htmlAst' |
  'excerptAst' |
  'headings' |
  'headings___value' |
  'headings___depth' |
  'timeToRead' |
  'tableOfContents' |
  'wordCount___paragraphs' |
  'wordCount___sentences' |
  'wordCount___words' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Query = {
  file?: Maybe<File>,
  allFile: FileConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  markdownRemark?: Maybe<MarkdownRemark>,
  allMarkdownRemark: MarkdownRemarkConnection,
  contentfulAsset?: Maybe<ContentfulAsset>,
  allContentfulAsset: ContentfulAssetConnection,
  contentfulPageBodyTextNode?: Maybe<ContentfulPageBodyTextNode>,
  allContentfulPageBodyTextNode: ContentfulPageBodyTextNodeConnection,
  contentfulPage?: Maybe<ContentfulPage>,
  allContentfulPage: ContentfulPageConnection,
  contentfulCategory?: Maybe<ContentfulCategory>,
  allContentfulCategory: ContentfulCategoryConnection,
  contentfulArticleBodyTextNode?: Maybe<ContentfulArticleBodyTextNode>,
  allContentfulArticleBodyTextNode: ContentfulArticleBodyTextNodeConnection,
  contentfulArticleDescriptionTextNode?: Maybe<ContentfulArticleDescriptionTextNode>,
  allContentfulArticleDescriptionTextNode: ContentfulArticleDescriptionTextNodeConnection,
  contentfulArticle?: Maybe<ContentfulArticle>,
  allContentfulArticle: ContentfulArticleConnection,
  contentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>,
  allContentfulPersonShortBioTextNode: ContentfulPersonShortBioTextNodeConnection,
  contentfulPerson?: Maybe<ContentfulPerson>,
  allContentfulPerson: ContentfulPersonConnection,
  contentfulContentType?: Maybe<ContentfulContentType>,
  allContentfulContentType: ContentfulContentTypeConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>,
  sort?: Maybe<MarkdownRemarkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  file?: Maybe<ContentfulAssetFileFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ContentfulFixedFilterInput>,
  resolutions?: Maybe<ContentfulResolutionsFilterInput>,
  fluid?: Maybe<ContentfulFluidFilterInput>,
  sizes?: Maybe<ContentfulSizesFilterInput>,
  resize?: Maybe<ContentfulResizeFilterInput>
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>,
  sort?: Maybe<ContentfulAssetSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulPageBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllContentfulPageBodyTextNodeArgs = {
  filter?: Maybe<ContentfulPageBodyTextNodeFilterInput>,
  sort?: Maybe<ContentfulPageBodyTextNodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulPageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  heroImage?: Maybe<ContentfulAssetFilterInput>,
  body?: Maybe<ContentfulPageBodyTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulPageSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  childContentfulPageBodyTextNode?: Maybe<ContentfulPageBodyTextNodeFilterInput>
};


export type QueryAllContentfulPageArgs = {
  filter?: Maybe<ContentfulPageFilterInput>,
  sort?: Maybe<ContentfulPageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  key?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  colour?: Maybe<StringQueryOperatorInput>,
  article?: Maybe<ContentfulArticleFilterListInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulCategorySysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>
};


export type QueryAllContentfulCategoryArgs = {
  filter?: Maybe<ContentfulCategoryFilterInput>,
  sort?: Maybe<ContentfulCategorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulArticleBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllContentfulArticleBodyTextNodeArgs = {
  filter?: Maybe<ContentfulArticleBodyTextNodeFilterInput>,
  sort?: Maybe<ContentfulArticleBodyTextNodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulArticleDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllContentfulArticleDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulArticleDescriptionTextNodeFilterInput>,
  sort?: Maybe<ContentfulArticleDescriptionTextNodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulArticleArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  repositoryName?: Maybe<StringQueryOperatorInput>,
  publishDate?: Maybe<DateQueryOperatorInput>,
  category?: Maybe<ContentfulCategoryFilterInput>,
  heroImage?: Maybe<ContentfulAssetFilterInput>,
  author?: Maybe<ContentfulPersonFilterInput>,
  description?: Maybe<ContentfulArticleDescriptionTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulArticleSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  soundCloudUrl?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<ContentfulArticleBodyTextNodeFilterInput>,
  childContentfulArticleDescriptionTextNode?: Maybe<ContentfulArticleDescriptionTextNodeFilterInput>,
  childContentfulArticleBodyTextNode?: Maybe<ContentfulArticleBodyTextNodeFilterInput>
};


export type QueryAllContentfulArticleArgs = {
  filter?: Maybe<ContentfulArticleFilterInput>,
  sort?: Maybe<ContentfulArticleSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulPersonShortBioTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  shortBio?: Maybe<StringQueryOperatorInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllContentfulPersonShortBioTextNodeArgs = {
  filter?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>,
  sort?: Maybe<ContentfulPersonShortBioTextNodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulPersonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  email?: Maybe<StringQueryOperatorInput>,
  facebook?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<ContentfulAssetFilterInput>,
  article?: Maybe<ContentfulArticleFilterListInput>,
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulPersonSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>
};


export type QueryAllContentfulPersonArgs = {
  filter?: Maybe<ContentfulPersonFilterInput>,
  sort?: Maybe<ContentfulPersonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  displayField?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>,
  sort?: Maybe<ContentfulContentTypeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export type SiteFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'siteMetadata___description' |
  'siteMetadata___title' |
  'port' |
  'host' |
  'buildTime';

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
  path: Scalars['String'],
  component: Scalars['String'],
  internalComponentName: Scalars['String'],
  componentChunkName: Scalars['String'],
  matchPath?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type SitePageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export type SitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'isCreatedByStatefulCreatePages' |
  'context___slug' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___spaceId' |
  'pluginCreator___pluginOptions___accessToken' |
  'pluginCreator___pluginOptions___alias____' |
  'pluginCreator___pluginOptions___appendScript' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___spaceId' |
  'pluginOptions___accessToken' |
  'pluginOptions___alias____' |
  'pluginOptions___appendScript' |
  'pluginOptions___path' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  spaceId?: Maybe<Scalars['String']>,
  accessToken?: Maybe<Scalars['String']>,
  alias?: Maybe<SitePluginPluginOptionsAlias>,
  appendScript?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsAlias = {
  _?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsAliasFilterInput = {
  _?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsFilterInput = {
  spaceId?: Maybe<StringQueryOperatorInput>,
  accessToken?: Maybe<StringQueryOperatorInput>,
  alias?: Maybe<SitePluginPluginOptionsAliasFilterInput>,
  appendScript?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
  description?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  description?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
