package ipeps.pwd.wallet.Controller;

import ipeps.pwd.wallet.common.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;

import ipeps.pwd.wallet.service.EmployeeTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins="*", maxAge = 3600)
@RestController
@RequestMapping("/v1/")
public class EmployeeTestControl {
    @Autowired
    private EmployeeTestService employeeTestService;

    //get all employees
   @GetMapping("employees")
   public ApiResponse list(){
        try{
            return new ApiResponse(true, this.employeeTestService.list() , ApiCode.getSuccessListCode("employee"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorListCode("employee"));
        }

    }
}
