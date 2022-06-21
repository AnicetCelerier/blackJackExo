import { Button, Container, Grid, Icon } from "semantic-ui-react";
import { CardComponent } from "../../components";
import { useGame } from "../../hooks";

const Home = () => {
  const { ia, player, step, setStep, getTotal, takeCard, restartGame } =
    useGame();

  return (
    <Container fluid inversed className="container-game">
      <Grid>
        {step === "null" && (
          <Grid.Row>
            <Grid.Column>
              <Button primary onClick={() => setStep("start")}>
                Commencer la partie
              </Button>
            </Grid.Column>
          </Grid.Row>
        )}
        {step === "playerturn" && (
          <Grid.Row columns={2}>
            {/* actions du joueur */}
            <Grid.Column>
              <Grid.Row>
                <Grid.Column>
                  <Button primary icon onClick={() => takeCard()}>
                    <Icon name="redo" />
                    Tirer une carte
                  </Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Button color="red" icon>
                    <Icon name="close" />
                    Passer son tour
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                <Grid.Column>
                  <p>Total: {getTotal(player.cartes)} </p>
                </Grid.Column>
              </Grid.Row>
              {player.cartes.map((carte) => (
                <Grid.Row key={`carte-${carte.enseigne}-${carte.valeur}`}>
                  <Grid.Column>
                    <CardComponent carte={carte} />
                  </Grid.Column>
                </Grid.Row>
              ))}
            </Grid.Column>
          </Grid.Row>
        )}
        {(step === "loose" || step === "win") && (
          <>
            <Grid.Row>
              {step === "loose" && <Grid.Column>Vous avez perdu</Grid.Column>}
              {step === "win" && <Grid.Column>Vous avez gagné</Grid.Column>}
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button primary onClick={() => restartGame()}>
                  Refaire une partie
                </Button>
              </Grid.Column>
            </Grid.Row>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
