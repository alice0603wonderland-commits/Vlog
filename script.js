fetch("posts.json")
  .then(response => response.json())
  .then(data => {
    // 🔽 日付が新しい順に並べ替え
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    const postList = document.querySelector(".post-list");

    data.forEach(post => {
      const card = document.createElement("div");
      card.classList.add("post-card");
      card.innerHTML = `
        <h3>${post.date} | ${post.title}</h3>
        <p>${post.excerpt}</p>
        <a href="${post.url}">▶記事を読む</a>
      `;
      postList.appendChild(card);
    });
  })
  .catch(error => console.error("記事データの読み込みに失敗しました:", error));
