class SavingsAccount extends BankAccount {

    private static final double INTEREST_RATE = 4.0;

    public SavingsAccount(String accountNumber,
                          String accountHolderName,
                          double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    public double calculateInterest() {
        return getBalance() * INTEREST_RATE / 100;
    }
}