const getDataGithub = async () => {
    const url = "https://api.github.com/users/aminah12";
    const option = {
      method: "GET",
    };
    try {
      let response = await fetch(url, option);
      response = await response.json();
      console.log(response);
      let displayUser = `<p>${response.login}</p>`;
      const username = document.querySelector(".username");

      let displayName = `<p>${response.name}</p>`;
      const name = document.querySelector(".name");

      let displayBio = `<p>${response.bio}</p>`;
      const bio = document.querySelector('.bio');

      let displayCompany = `<p>${response.company}</p>`;
      const company = document.querySelector('.company');

      let displayTwitter = `<p>${response.twitter_username}</p>`;
      const twitter = document.querySelector('.twitter');

      let displayRepos = `<p>${response.public_repos}</p>`;
      const repos = document.querySelector('.repos');

      let displayFollowers = `<p>${response.followers}</p>`;
      const followers = document.querySelector('.followers');

      let displayFollowing = `<p>${response.following}</p>`;
      const following = document.querySelector('.following');
      
      username.innerHTML = displayUser;
      name.innerHTML = displayName;
      bio.innerHTML = displayBio;
      company.innerHTML = displayCompany;
      twitter.innerHTML = displayTwitter;
      repos.innerHTML = displayRepos;
      followers.innerHTML = displayFollowers;
      following.innerHTML = displayFollowing;

    } catch (error) {
      console.log(error);
    }
  };
  
  getDataGithub();