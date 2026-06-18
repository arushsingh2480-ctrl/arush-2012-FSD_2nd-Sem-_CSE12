public class BankManagementSystem {

    public static void main(String[] args) {

        SavingsAccount sa =
                new SavingsAccount("SA101",
                        "Arush",
                        10000);

        CurrentAccount ca =
                new CurrentAccount("CA201",
                        "Rahul",
                        20000);

        System.out.println("===== Savings Account =====");
        sa.deposit(5000);
        sa.displayDetails();
        System.out.println("Interest : ₹" +
                sa.calculateInterest());

        System.out.println();

        System.out.println("===== Current Account =====");
        ca.deposit(3000);
        ca.displayDetails();
        System.out.println("Interest : ₹" +
                ca.calculateInterest());
    }
}