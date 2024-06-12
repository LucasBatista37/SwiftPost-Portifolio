import React, { useEffect } from "react";
import { db } from "../../firebase/config"; // Importe sua instância do Firestore aqui

const DeleteExpiredPosts = () => {
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const querySnapshot = await db.collection("posts").get();
        const currentTime = new Date();

        querySnapshot.forEach(async (doc) => {
          const createdAt = doc.data().createdAt.toDate();
          const diffInHours = Math.abs(currentTime - createdAt) / 36e5; // Calcula a diferença em horas

          if (diffInHours >= 1) {
            await db.collection("posts").doc(doc.id).delete();
            console.log(`Post ${doc.id} deletado após 1 hora.`);
          }
        });
      } catch (error) {
        console.error("Erro ao verificar e deletar posts:", error);
      }
    }, 36); // 1 hora em milissegundos

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default DeleteExpiredPosts;
