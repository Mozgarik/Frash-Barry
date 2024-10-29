import React from 'react';
import styles from '../styles/RecipesPage.module.css';

export default function RecipesPage() {
  const recipes = [
    { title: "Клубничный пирог", description: "Вкусный пирог с клубникой", image: "path-to-image" },
    { title: "Смузи с клубникой", description: "Свежий смузи с клубникой", image: "path-to-image" },
    { title: "Клубничный салат", description: "Полезный салат с клубникой", image: "path-to-image" }
    // Добавьте больше рецептов по желанию
  ];

  return (
    <div className={styles.recipesPage}>
      <h1>Рецепты с клубникой</h1>
      <div className={styles.recipesGrid}>
        {recipes.map((recipe, index) => (
          <div key={index} className={styles.recipeCard}>
            <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
