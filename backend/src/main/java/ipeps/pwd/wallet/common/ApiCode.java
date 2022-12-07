package ipeps.pwd.wallet.common;

public class ApiCode {

    public static String getSuccessListCode(String entity){
        return "api."+entity+".list.success";
    }
    public static String getErrorListCode(String entity){
        return "api."+entity+".list.error";
    }
    public static String getSuccessDetailCode(String entity){
        return "api."+entity+".detail.success";
    }
    public static String getErrorDetailCode(String entity){
        return "api."+entity+".detail.error";
    }
    public static String getErrorDetailNotFoundCode(String entity){
        return "api."+entity+".detail.not_found.error";
    }
    public static String getSuccessCreateCode(String entity){
        return "api."+entity+".create.success";
    }
    public static String getErrorCreateCode(String entity){
        return "api."+entity+".create.error";
    }
    public static String getSuccessUpdateCode(String entity){
        return "api."+entity+".update.success";
    }
    public static String getErrorUpdateCode(String entity){
        return "api."+entity+".update.error";
    }
    public static String getErrorUpdateNotFoundCode(String entity){
        return "api."+entity+".update.not_found.error";
    }
    public static String getSuccessDeleteCode(String entity){
        return "api."+entity+".delete.success";
    }
    public static String getErrorDeleteCode(String entity){
        return "api."+entity+".delete.error";
    }
   /* public static String EMPLOYEE_LIST_SUCCESS="api.employee.list.success";
    public static String EMPLOYEE_LIST_ERROR="api.employee.list.error";
    public static String EMPLOYEE_DETAIL_SUCCESS="api.employee.detail.success";
    public static String EMPLOYEE_DETAIL_ERROR="api.employee.detail.error";
    public static final String EMPLOYEE_DETAIL_NOT_FOUND="api.employee.detail.not_found";
    public static String EMPLOYEE_CREATE_SUCCESS="api.employee.create.success";
    public static String EMPLOYEE_CREATE_ERROR="api.employee.create.error";
    public static String EMPLOYEE_UPDATE_SUCCESS="api.employee.update.success";
    public static String EMPLOYEE_UPDATE_ERROR="api.employee.update.error";
    public static String EMPLOYEE_UPDATE_NOT_FOUND="api.employee.update.not_found";
    public static String EMPLOYEE_DELETE_SUCCESS="api.employee.delete.success";
    public static String EMPLOYEE_DELETE_ERROR="api.employee.delete.error";*/
}
