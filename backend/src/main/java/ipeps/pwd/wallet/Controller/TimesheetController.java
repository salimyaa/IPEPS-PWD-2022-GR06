package ipeps.pwd.wallet.Controller;

import ipeps.pwd.wallet.common.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.entity.Timesheet;
import ipeps.pwd.wallet.entity.payload.TimesheetCreatePayload;
import ipeps.pwd.wallet.entity.payload.TimesheetUpdatePayload;
import ipeps.pwd.wallet.service.TimesheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins="*", maxAge = 3600)

@RestController
@RequestMapping("timesheets")
public class TimesheetController {
    @Autowired
    TimesheetService timesheetService;

    @GetMapping("list")
    public ApiResponse list(){

        try{
            return new ApiResponse(true, this.timesheetService.list() , ApiCode.getSuccessListCode("timesheet"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorListCode("timesheet"));
        }
    }
    @GetMapping("listByEmployee/{id}")
    public ApiResponse listByEmployeeID(@PathVariable("id") UUID employee_id){
        try {
            return new ApiResponse(true,this.timesheetService.listByEmployeeID(employee_id),ApiCode.getSuccessListCode("timesheet"));

        }
        catch (Exception e)
        {
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorDetailCode("timesheet"));

        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID timesheet_id){

        try{
            Timesheet detail = this.timesheetService.detail(timesheet_id);
            if (detail != null){
                return new ApiResponse(true, detail ,ApiCode.getSuccessDetailCode("timesheet"));
            }else {
                return new ApiResponse(false, detail,ApiCode.getErrorDetailNotFoundCode("timesheet"));
            }
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorDetailCode("timesheet"));
        }

    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody() TimesheetCreatePayload payload){
        try{
            return new ApiResponse(true, this.timesheetService.create(payload),ApiCode.getSuccessCreateCode("timesheet"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage(),ApiCode.getErrorCreateCode("timesheet"));
        }
    }
    @PutMapping("update")
    public ApiResponse update(@RequestBody() TimesheetUpdatePayload payload){
        try{
            Timesheet timesheetUpdated = this.timesheetService.update(payload);
            if (timesheetUpdated != null){
                return new ApiResponse(true, timesheetUpdated ,ApiCode.getSuccessUpdateCode("timesheet"));
            }
            return new ApiResponse(false, this.timesheetService.update(payload),ApiCode.getErrorUpdateNotFoundCode("timesheet"));
        }
        catch (Exception e){
            return new ApiResponse(false, e.getMessage() ,ApiCode.getErrorUpdateCode("timesheet"));
        }
    }
    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id")UUID timesheet_id){
        if (this.timesheetService.delete(timesheet_id)){
            return new ApiResponse(true, "" ,ApiCode.getSuccessDeleteCode("timesheet"));
        }

        return new ApiResponse(false, "" ,ApiCode.getErrorDeleteCode("timesheet"));
    }



}
