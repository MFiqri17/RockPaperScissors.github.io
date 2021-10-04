package java;
import java.util.*;
public class RockPaperScissors {
    public static final String possibleChoices[] = { "rock", "paper", "scissors" };

    public static void main(String[] args) {
        int computerScore = 0;
        int playerScore = 0;
        while (true) {

            System.out.print("Choose Your Hero : ");

            String playerChoice = getPlayerChoice();
            if (playerChoice.equals("stop")) {
                break;
            }
            String computerChoice = getComputerChoice();

            System.out.println("You have choosen " + playerChoice);
            System.out.println("And Computer has choosen " + computerChoice);

            if (playerChoice.equals(computerChoice)) {
                System.out.println("Result : It's Draw Mate. Try Again !!!");
            } else if (playerChoice.equals("rock")) {
                if (computerChoice.equals("paper")) {
                    computerScore++;
                    System.out.println("Result : Ahhh, You Lose Bruhh");
                } else {
                    playerScore++;
                    System.out.println("Result : Yeahhh, You Win Bruhh");
                }
            } else if (playerChoice.equals("paper")) {
                if (computerChoice.equals("rock")) {
                    playerScore++;
                    System.out.println("Result : Yeahhh, You Win Bruhh");
                } else {
                    computerScore++;
                    System.out.println("Result : Ahhh, You Lose Bruhh");
                }
            } else {
                if (computerChoice.equals("Rock")) {
                    computerScore++;
                    System.out.println("Result : Ahhh, You Lose Bruhh");
                } else {
                    playerScore++;
                    System.out.println("Result : Yeahhh, You Win Bruhh");
                }
            }

            System.out.println("Type stop if you want to stop");

        }
        System.out.println("The Total Result : ");
        System.out.println("Your Score : " + playerScore);
        System.out.println("Computer Score : " + computerScore);
        if (playerScore == computerScore) {
            System.out.println("It's Draw");
        } else if (playerScore > computerScore) {
            System.out.println("Congrast, You have won this game");
        } else {
            System.out.println("Unfortunately, You lost this game");
        }
    }

    public static String getComputerChoice() {
        String computerChoice;
        Random random = new Random();
        int input = random.nextInt(3);
        computerChoice = possibleChoices[input];
        return computerChoice;
    }

    public static String getPlayerChoice() {
        Scanner in = new Scanner(System.in);
        String input = in.next();
        String playerChoice = input.toLowerCase();
        return playerChoice;
    }

}
