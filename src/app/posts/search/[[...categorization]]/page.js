import React from "react";
import { Post } from "@components";
import { posts } from "@static";

// params: contiens une LISTE (voire les ... dans le nom de la route !) des paramétres de la route sous le nom du paramétre précisé (dans ce cas, categorization)
// searchParams: un objet avec les clés / valeurs du query: non précisés en avance (aucun besoin de modifier le chemin ou le nom de la route pour les modifier)
// Rappel sur la déstructuration: { params: { categorization } } c'est le même que const categorization = props.params.categorization;
export default function Posts({
  params: { categorization = [] },
  searchParams = {},
}) {
  console.log(searchParams);
  let postsToDisplay = posts.filter(post =>
    categorization.every(el =>
      post.categorization.map(str => str.toLowerCase()).includes(el)
    )
  );
  if (searchParams?.tag) {
    postsToDisplay = postsToDisplay.filter(post =>
      post.tags
        .map(tag => tag.toLowerCase())
        .find(el => el.includes(searchParams.tag.toLowerCase()))
    );
  }
  return (
    <main className="main">
      {postsToDisplay.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}
