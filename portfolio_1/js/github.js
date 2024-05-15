export async function getGitHubAPI() {
  try {
    const user = "jorgeguedess";
    const data = await fetch(`https://api.github.com/users/${user}`);
    const profile = await data.json();

    let conteudo = `
      <div class="about__content">
      <h1 class="title">Quem sou eu?</h1>
      <p class="description">
        ${profile.bio}
      </p>
      <div class="github_info">
        <a
          class="btn"
          href="${profile.html_url}"
          target="_blank"
          >Github</a
        >
        <span id="followers">${profile.followers} Seguidores</span>
        <span id="repositories">${profile.public_repos} Repositórios</span>
      </div>
    </div>
    <div class="about__image">
      <img
        src=${profile.avatar_url}
        alt=${profile.name}
      />
    </div>
      `;

    document.querySelector("#about").innerHTML += conteudo;
  } catch (error) {
    console.log(error);
  }
}
