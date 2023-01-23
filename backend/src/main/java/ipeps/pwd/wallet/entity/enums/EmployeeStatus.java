package ipeps.pwd.wallet.entity.enums;

public enum EmployeeStatus {
    EMPLOYED("EMPLOYED"),
    NOT_EMPLOYED("NOT_EMPLOYED");
    public final String label;

    private EmployeeStatus(String label) {
        this.label = label;
    }
}