package ipeps.pwd.wallet.Controller;

import ipeps.pwd.wallet.common.ApiCode;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.service.EmployeeService;
import ipeps.pwd.wallet.entity.payload.EmployeeCreatePayload;
import ipeps.pwd.wallet.entity.payload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;


import java.util.UUID;

@CrossOrigin(origins="*", maxAge = 3600)

@RestController
@RequestMapping ("Employees")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;
    @GetMapping("list")
    public ApiResponse list(){

        try{
            return new ApiResponse(true, this.employeeService.list() , ApiCode.getSuccessListCode("employee"));
           }
            catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorListCode("employee"));
        }

    }
    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id")UUID employee_id){

        try{
            Employee detail = this.employeeService.detail(employee_id);
            if (detail != null){
                return new ApiResponse(true, detail ,ApiCode.getSuccessDetailCode("employee"));
            }else {
                return new ApiResponse(false, detail,ApiCode.getErrorDetailNotFoundCode("employee"));
            }
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorDetailCode("employee"));
        }

    }
    @PostMapping("create")
    public ApiResponse create(@RequestBody() EmployeeCreatePayload payload){

        try{
            return new ApiResponse(true, this.employeeService.create(payload),ApiCode.getSuccessCreateCode("employee"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage(),ApiCode.getErrorCreateCode("employee"));
        }

    }
    @PutMapping("update")
    public ApiResponse update(@RequestBody() EmployeeUpdatePayload payload){
        try{
            Employee employeeUpdated = this.employeeService.update(payload);
            if (employeeUpdated != null){
                return new ApiResponse(true, employeeUpdated ,ApiCode.getSuccessUpdateCode("employee"));
            }
                return new ApiResponse(false, this.employeeService.update(payload),ApiCode.getErrorUpdateNotFoundCode("employee"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorUpdateCode("employee"));
        }

    }
    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id")UUID employee_id){
    if (this.employeeService.delete(employee_id)){
            return new ApiResponse(true, "" ,ApiCode.getSuccessDeleteCode("employee"));
        }

            return new ApiResponse(false, "" ,ApiCode.getErrorDeleteCode("employee"));
    }

}

