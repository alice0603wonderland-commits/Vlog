// posts.json から最新の2件を取得して表示
fetch("posts.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("JSONファイルの読み込みに失敗しました");
    }
    return response.json();
  })
  .then(data => {
    // 日付の新しい順にソート
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    // 最新の2件だけを取り出す
    const latestPosts = data.slice(0, 2);

    // HTML側の <ul id="latest-posts"> に挿入
    const postList = document.getElementById("latest-posts");

    latestPosts.forEach(post => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${post.url}">▶ ${post.date}｜${post.title}</a>`;
      postList.appendChild(li);
    });
  })
  .catch(error => {
    console.error("記事データの読み込み中にエラー:", error);
  });
