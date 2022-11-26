package ipeps.pwd.wallet.Controller;

import ipeps.pwd.wallet.common.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.entity.payload.OrganizationCreatePayload;
import ipeps.pwd.wallet.entity.payload.OrganizationUpdatePayload;
import ipeps.pwd.wallet.service.OrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.UUID;


@CrossOrigin(origins="*", maxAge = 3600)

@RestController
@RequestMapping("Organization")
public class OrganizationController {

    @Autowired
    OrganizationService organizationService;
    @GetMapping("list")
    public ApiResponse list(){

        try{
            return new ApiResponse(true, this.organizationService.list() , ApiCode.EMPLOYEE_LIST_SUCCESS);
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.EMPLOYEE_LIST_ERROR);
        }

    }
    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID organization_id){

        try{
            Organization detail = this.organizationService.detail(organization_id);
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
    public ApiResponse create(@RequestBody() OrganizationCreatePayload payload){

        try{
            return new ApiResponse(true, this.organizationService.create(payload),ApiCode.EMPLOYEE_CREATE_SUCCESS);
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage(),ApiCode.EMPLOYEE_CREATE_ERROR);
        }

    }
    @PutMapping("update")
    public ApiResponse update(@RequestBody() OrganizationUpdatePayload payload){
        try{
            Organization organizationUpdated = this.organizationService.update(payload);
            if (organizationUpdated != null){
                return new ApiResponse(true, organizationUpdated ,ApiCode.EMPLOYEE_UPDATE_SUCCESS);
            }
            return new ApiResponse(false, this.organizationService.update(payload),ApiCode.EMPLOYEE_UPDATE_NOT_FOUND);
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.EMPLOYEE_UPDATE_ERROR);
        }

    }
    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id")UUID organization_id){
        if (this.organizationService.delete(organization_id)){
            return new ApiResponse(true, "" ,ApiCode.EMPLOYEE_DELETE_SUCCESS);
        }

        return new ApiResponse(false, "" ,ApiCode.EMPLOYEE_DELETE_ERROR);
    }

}