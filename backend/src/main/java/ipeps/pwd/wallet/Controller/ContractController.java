package ipeps.pwd.wallet.Controller;

import ipeps.pwd.wallet.common.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.entity.Contract;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.payload.ContractCreatePayload;
import ipeps.pwd.wallet.entity.payload.ContractUpdatePayload;
import ipeps.pwd.wallet.entity.payload.EmployeeCreatePayload;
import ipeps.pwd.wallet.entity.payload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;


@CrossOrigin(origins="*", maxAge = 3600)

@RestController
@RequestMapping("Contracts")
public class ContractController {
@Autowired
    ContractService contractService;

@GetMapping("list")
    public ApiResponse list(){
    try{
        return new ApiResponse(true, this.contractService.list(), ApiCode.getSuccessListCode("contract"));
    }
    catch (Exception e)
    {
        return new ApiResponse(false,e.getMessage(),ApiCode.getErrorListCode("contract"));
    }
}
@GetMapping("listByEmployee/{id}")
public ApiResponse listByEmployeeID(@PathVariable("id") UUID employee_id){
    try {
        return new ApiResponse(true,this.contractService.listByEmployeeID(employee_id),ApiCode.getSuccessListCode("contract"));

    }
    catch (Exception e)
    {
        return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorDetailCode("contract"));
        //todo: custom error
    }
}
    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID Contract_id){

        try{
            Contract detail = this.contractService.detail(Contract_id);
            if (detail != null){
                return new ApiResponse(true, detail ,ApiCode.getSuccessDetailCode("contract"));
            }else {
                return new ApiResponse(false, detail,ApiCode.getErrorDetailNotFoundCode("contract"));
            }
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorDetailCode("contract"));
        }

    }
    @PostMapping("create")
    public ApiResponse create(@RequestBody() ContractCreatePayload payload){

        try{
            return new ApiResponse(true, this.contractService.create(payload),ApiCode.getSuccessCreateCode("contract"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage(),ApiCode.getErrorCreateCode("contract"));
        }

    }
    @PutMapping("update")
    public ApiResponse update(@RequestBody() ContractUpdatePayload payload){
        try{
            Contract contractUptaded = this.contractService.update(payload);
            if (contractUptaded != null){
                return new ApiResponse(true, contractUptaded ,ApiCode.getSuccessUpdateCode("contract"));
            }
            return new ApiResponse(false, this.contractService.update(payload),ApiCode.getErrorUpdateNotFoundCode("contract"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorUpdateCode("contract"));
        }

    }
    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id")UUID Contract_id){
        if (this.contractService.delete(Contract_id)){
            return new ApiResponse(true, "" ,ApiCode.getSuccessDeleteCode("contract"));
        }

        return new ApiResponse(false, "" ,ApiCode.getErrorDeleteCode("contract"));
    }


}
