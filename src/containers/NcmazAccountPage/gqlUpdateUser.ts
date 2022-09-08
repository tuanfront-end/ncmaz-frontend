const GQL_MUTATION_UPDATE_USER = `mutation MUTAION_UPDATE_PROFILE(
  $description: String = null,
  $websiteUrl: String = null, 
  $ncmazYoutubeUrl: String = null, 
  $ncmazWebsiteUrl: String = null, 
  $nicename: String = null, 
  $nickname: String = null, 
  $password: String = null,
   $ncmazVimeoUrl: String = null, 
  $ncmazTwitterUrl: String = null, 
  $ncmazTwitchUrl: String = null, 
  $ncmazPinterestUrl: String = null,
   $ncmazMediumUrl: String = null, 
  $ncmazLinkedinUrl: String = null, 
  $ncmazInstagramUrl: String = null, 
  $ncmazGithubUrl: String = null, 
  $ncmazFeaturedImage: Int = null, 
  $ncmazFacebookUrl: String = null, 
  $ncmazBuymeacoffeUrl: String = null, 
  $ncmazBio: String = null, 
  $ncmazBackgroundImage: Int = null, 
  $lastName: String = null, 
  $id: ID = "", 
  $firstName: String = null, 
  $email: String = null, 
  $displayName: String = null
  ) {
    updateUser(
      input: {
        id: $id, 
        displayName: $displayName, 
        email: $email, 
        firstName: $firstName, 
        lastName: $lastName, 
        password: $password, 
        ncmazBackgroundImage: $ncmazBackgroundImage, 
        ncmazBio: $ncmazBio, 
        ncmazBuymeacoffeUrl: $ncmazBuymeacoffeUrl, 
        ncmazFacebookUrl: $ncmazFacebookUrl, 
        ncmazFeaturedImage: $ncmazFeaturedImage,
         ncmazGithubUrl: $ncmazGithubUrl,
          ncmazInstagramUrl: $ncmazInstagramUrl,
           ncmazLinkedinUrl: $ncmazLinkedinUrl, 
           ncmazMediumUrl: $ncmazMediumUrl, 
           ncmazPinterestUrl: $ncmazPinterestUrl, 
           ncmazTwitchUrl: $ncmazTwitchUrl,
            ncmazTwitterUrl: $ncmazTwitterUrl, 
            ncmazVimeoUrl: $ncmazVimeoUrl, 
            ncmazWebsiteUrl: $ncmazWebsiteUrl,
             nicename: $nicename, 
             nickname: $nickname, 
             websiteUrl: $websiteUrl, 
             ncmazYoutubeUrl: $ncmazYoutubeUrl,
        description: $description
      }
    ) {
      user {
        url
        slug
        uri
        id
        databaseId
        email
        nickname
        nicename
        ncUserMeta {
          buymeacoffeUrl
          facebookUrl
          githubUrl
          instagramUrl
          linkedinUrl
          mediumUrl
          ncBio
          pinterestUrl
          twitchUrl
          twitterUrl
          vimeoUrl
          websiteUrl
          youtubeUrl
          featuredImage {
            id
            databaseId
            sourceUrl
          }
          backgroundImage {
            id
            sourceUrl
            databaseId
          }
        }
      }
    }
  } `;

const GQL_QUERY_FULL_USER_DATA = `query MyQuery($id: ID = "", $idType: UserNodeIdTypeEnum = DATABASE_ID) {
    user(id: $id, idType: $idType) {
      id
      description
      nicename
      registeredDate
      firstName
      lastName
      ncUserMeta {
        buymeacoffeUrl
        facebookUrl
        backgroundImage {
          altText
          id
          sourceUrl
          databaseId
        }
        githubUrl
        instagramUrl
        linkedinUrl
        mediumUrl
        ncBio
        pinterestUrl
        twitchUrl
        twitterUrl
        vimeoUrl
        websiteUrl
        youtubeUrl
        featuredImage {
          altText
          id
          databaseId
          sourceUrl
        }
      }
      email
      databaseId
      locale
      name
      slug
      uri
      url
      userId
      username
      roles {
        edges {
          node {
            id
            name
          }
        }
      }
      nickname
    }
  }`;

export { GQL_MUTATION_UPDATE_USER, GQL_QUERY_FULL_USER_DATA };
