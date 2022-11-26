package ipeps.pwd.wallet.Controller;

import ipeps.pwd.wallet.common.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.entity.Company;

import ipeps.pwd.wallet.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.entity.payload.CompanyUpdatePayload;
import ipeps.pwd.wallet.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
@CrossOrigin(origins="*", maxAge = 3600)

@RestController
@RequestMapping("Company")
public class CompanyController {

    @Autowired
    CompanyService companyService;
    @GetMapping("list")
    public ApiResponse list(){

        try{
            return new ApiResponse(true, this.companyService.list() , ApiCode.EMPLOYEE_LIST_SUCCESS);
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.EMPLOYEE_LIST_ERROR);
        }

    }
    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID Company_id){

        try{
            Company detail = this.companyService.detail(Company_id);
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
    public ApiResponse create(@RequestBody() CompanyCreatePayload payload){

        try{
            return new ApiResponse(true, this.companyService.create(payload),ApiCode.EMPLOYEE_CREATE_SUCCESS);
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage(),ApiCode.EMPLOYEE_CREATE_ERROR);
        }

    }
    @PutMapping("update")
    public ApiResponse update(@RequestBody() CompanyUpdatePayload payload){
        try{
            Company companyUpdated = this.companyService.update(payload);
            if (companyUpdated != null){
                return new ApiResponse(true, companyUpdated ,ApiCode.EMPLOYEE_UPDATE_SUCCESS);
            }
            return new ApiResponse(false, this.companyService.update(payload),ApiCode.EMPLOYEE_UPDATE_NOT_FOUND);
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.EMPLOYEE_UPDATE_ERROR);
        }

    }
    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id")UUID Company_id){
        if (this.companyService.delete(Company_id)){
            return new ApiResponse(true, "" ,ApiCode.EMPLOYEE_DELETE_SUCCESS);
        }

        return new ApiResponse(false, "" ,ApiCode.EMPLOYEE_DELETE_ERROR);
    }

}

