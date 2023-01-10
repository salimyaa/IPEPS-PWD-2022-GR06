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
            return new ApiResponse(true, this.companyService.list() , ApiCode.getSuccessListCode("company"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorListCode("company"));
        }

    }
    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID CompanyId){

        try{
            Company detail = this.companyService.detail(CompanyId);
            if (detail != null){
                return new ApiResponse(true, detail ,ApiCode.getSuccessDetailCode("company"));
            }else {
                return new ApiResponse(false, detail,ApiCode.getErrorDetailNotFoundCode("company"));
            }
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorDetailCode("company"));
        }

    }
    @PostMapping("create")
    public ApiResponse create(@RequestBody() CompanyCreatePayload payload){

        try{
            return new ApiResponse(true, this.companyService.create(payload),ApiCode.getSuccessCreateCode("company"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage(),ApiCode.getErrorCreateCode("company"));
        }

    }
    @PutMapping("update")
    public ApiResponse update(@RequestBody() CompanyUpdatePayload payload){
        try{
            Company companyUpdated = this.companyService.update(payload);
            if (companyUpdated != null){
                return new ApiResponse(true, companyUpdated ,ApiCode.getSuccessUpdateCode("company"));
            }
            return new ApiResponse(false, this.companyService.update(payload),ApiCode.getErrorUpdateNotFoundCode("company"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorUpdateCode("company"));
        }

    }
    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id")UUID CompanyId){
        if (this.companyService.delete(CompanyId)){
            return new ApiResponse(true, "" ,ApiCode.getSuccessDeleteCode("company"));
        }

        return new ApiResponse(false, "" ,ApiCode.getErrorDeleteCode("company"));
    }

}

