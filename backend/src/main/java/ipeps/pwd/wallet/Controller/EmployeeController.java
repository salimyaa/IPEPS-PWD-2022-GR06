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
@RequestMapping("Employees")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;
    @GetMapping("list")
    public ApiResponse list(){

        try{
            return new ApiResponse(true, this.employeeService.list() , ApiCode.EMPLOYEE_LIST_SUCCESS);
           }
            catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.EMPLOYEE_LIST_ERROR);
        }

    }
    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id")UUID Employee_id){

        try{
            Employee detail = this.employeeService.detail(Employee_id);
            if (detail != null){
                return new ApiResponse(true, detail ,ApiCode.EMPLOYEE_DETAIL_SUCCESS);
            }else {
                return new ApiResponse(false, detail,ApiCode.EMPLOYEE_DETAIL_NOT_FOUND);
            }
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.EMPLOYEE_DETAIL_ERROR);
        }

    }
    @PostMapping("create")
    public ApiResponse create(@RequestBody() EmployeeCreatePayload payload){

        try{
            return new ApiResponse(true, this.employeeService.create(payload),ApiCode.EMPLOYEE_CREATE_SUCCESS);
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage(),ApiCode.EMPLOYEE_CREATE_ERROR);
        }

    }
    @PutMapping("update")
    public ApiResponse update(@RequestBody() EmployeeUpdatePayload payload){
        try{
            Employee employeeUpdated = this.employeeService.update(payload);
            if (employeeUpdated != null){
                return new ApiResponse(true, employeeUpdated ,ApiCode.EMPLOYEE_UPDATE_SUCCESS);
            }
                return new ApiResponse(false, this.employeeService.update(payload),ApiCode.EMPLOYEE_UPDATE_NOT_FOUND);
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.EMPLOYEE_UPDATE_ERROR);
        }

    }
    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id")UUID Employee_id){
    if (this.employeeService.delete(Employee_id)){
            return new ApiResponse(true, "" ,ApiCode.EMPLOYEE_DELETE_SUCCESS);
        }

            return new ApiResponse(false, "" ,ApiCode.EMPLOYEE_DELETE_ERROR);
    }

}

