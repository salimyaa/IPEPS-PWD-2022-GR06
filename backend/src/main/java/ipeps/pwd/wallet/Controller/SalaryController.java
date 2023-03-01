package ipeps.pwd.wallet.Controller;

import ipeps.pwd.wallet.common.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.entity.payload.SalaryCreatePayload;
import ipeps.pwd.wallet.entity.payload.SalaryUpdatePayload;
import ipeps.pwd.wallet.entity.Salary;
import ipeps.pwd.wallet.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;


@CrossOrigin(origins="*", maxAge = 3600)

@RestController
@RequestMapping("Salary")
public class SalaryController {

    @Autowired
    SalaryService salaryService;
    @GetMapping("list")
    public ApiResponse list(){

        try{
            return new ApiResponse(true, this.salaryService.list() , ApiCode.getSuccessListCode("salary"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorListCode("salary"));
        }

    }
    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID salary_id){

        try{
            Salary detail = this.salaryService.detail(salary_id);
            if (detail != null){
                return new ApiResponse(true, detail ,ApiCode.getSuccessDetailCode("salary"));
            }else {
                return new ApiResponse(false, detail,ApiCode.getErrorDetailNotFoundCode("salary"));
            }
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorDetailCode("salary"));
        }

    }
    @PostMapping("create")
    public ApiResponse create(@RequestBody() SalaryCreatePayload payload){

        try{
            return new ApiResponse(true, this.salaryService.create(payload),ApiCode.getSuccessCreateCode("salary"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage(),ApiCode.getErrorCreateCode("salary"));
        }

    }
    @PutMapping("update")
    public ApiResponse update(@RequestBody() SalaryUpdatePayload payload){
        try{
            Salary salaryUpdated = this.salaryService.update(payload);
            if (salaryUpdated != null){
                return new ApiResponse(true, salaryUpdated ,ApiCode.getSuccessUpdateCode("salary"));
            }
            return new ApiResponse(false, this.salaryService.update(payload),ApiCode.getErrorUpdateNotFoundCode("salary"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorUpdateCode("salary"));
        }

    }
    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id")UUID salary_id){
        if (this.salaryService.delete(salary_id)){
            return new ApiResponse(true, "" ,ApiCode.getSuccessDeleteCode("salary"));
        }

        return new ApiResponse(false, "" ,ApiCode.getErrorDeleteCode("salary"));
    }

}

