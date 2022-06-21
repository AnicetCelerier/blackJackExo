import { useEffect, useState } from "react";
import { Carte, Joueur, Step, getDeck } from "../../types";

const useGame = () => {
  const [step, setStep] = useState<Step>("null");
  const [deck, setDeck] = useState<Carte[]>([]);
  const [player, setPlayer] = useState<Joueur>({
    cartes: [],
    score: 0,
    type: "joueur",
  });

  const [ia, setIa] = useState<Joueur>({
    cartes: [],
    score: 0,
    type: "ia",
  });

  const getCards = (nb: number = 1) => {
    const cards = [];
    for (let i = 0; i < nb; i++) {
      const card = deck[Math.floor(Math.random() * deck.length)];
      cards.push(card);
    }
    return cards;
  };

  const startGame = () => {
    const cards = getCards(2);
    setPlayer({ ...player, cartes: cards });
    setStep("playerturn");
  };

  const getTotal = (cartes: Carte[]) => {
    let total = 0;
    cartes.forEach((carte) => (total += carte.valeur));
    return total;
  };

  const takeCard = () => {
    const card = getCards(1);
    setPlayer((_player) => {
      // _player.cartes.push(card[0]);
      _player.cartes = _player.cartes.concat(card);
      return JSON.parse(JSON.stringify(_player));
    });
  };

  const restartGame = () => {
    setPlayer({
      ...player,
      cartes: [],
    });
    setIa({
      ...ia,
      cartes: [],
    });
    setStep("start");
  };

  useEffect(() => {
    if (ia.cartes.length === 0) return;
    const total = getTotal(player.cartes);
    if (total > 21) {
      setStep("loose");
    }
  }, [player]);

  useEffect(() => {
    if (ia.cartes.length === 0) return;
    const total = getTotal(ia.cartes);
    setTimeout(() => {
      // conditions si joueur ou ia a gagné
    }, 2000);
  }, [ia]);

  useEffect(() => {
    switch (step) {
      case "start":
        startGame();
        break;
    }
  }, [step]);

  useEffect(() => {
    setDeck(getDeck());
  }, []);

  return {
    step,
    player,
    ia,
    setStep,
    getTotal,
    takeCard,
    restartGame,
  };
};

export default useGame;
