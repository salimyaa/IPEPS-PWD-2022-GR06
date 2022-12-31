package ipeps.pwd.wallet.service.impl;

import com.sun.tools.jconsole.JConsoleContext;
import ipeps.pwd.wallet.entity.Timesheet;
import ipeps.pwd.wallet.entity.builder.TimesheetBuilder;
import ipeps.pwd.wallet.entity.payload.TimesheetCreatePayload;
import ipeps.pwd.wallet.entity.payload.TimesheetUpdatePayload;
import ipeps.pwd.wallet.repository.TimesheetRepository;
import ipeps.pwd.wallet.service.TimesheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TimesheetServiceImpl implements TimesheetService {
    @Autowired
    TimesheetRepository timesheetRepository;

    @Override
    public List<Timesheet> list() {
        return timesheetRepository.findAll();
    }

    @Override
    public Timesheet detail(UUID timesheet_id) {
        return timesheetRepository.findById(timesheet_id).orElse(null);
    }

    @Override
    public Timesheet create(TimesheetCreatePayload payload) {
        try{
            Timesheet timesheet= new TimesheetBuilder()
                    .setStart_date(payload.getStart_date())
                    .setStart_hours(payload.getStart_hours())
                    .setEnd_hours(payload.getEnd_hours())
                    .setComment(payload.getComment())
                    .setTimesheet_type(payload.getTimesheet_type())
                    .setEmployee(payload.getEmployee())
                    .setContract(payload.getContract())
                    .Build();
//            System.out.println("----- check du payload-----");
//            System.out.println(payload.getComment()+' '+payload.getStart_date().toString());
//            System.out.println("----- Creation du Timesheet-----");
//            System.out.println(timesheet);
//            System.out.println("---------FIN------");


            return this.timesheetRepository.save(timesheet);
        }
        catch (Exception e)
        {
            return null;
        }
    }

    @Override
    public Timesheet update(TimesheetUpdatePayload payload) {
        Timesheet detail= this.detail(payload.getTimesheet_id());
        if(detail!=null)
        {
           detail.setStart_date(payload.getStart_date());
           detail.setStart_hours(payload.getStart_hours());
           detail.setEnd_hours(payload.getEnd_hours());
           detail.setComment(payload.getComment());
           detail.setTimesheet_type(payload.getTimesheet_type());
           detail.setEmployee(payload.getEmployee());
           detail.setContract(payload.getContract());
           return this.timesheetRepository.save(detail);
        }
        return detail;
    }

    @Override
    public boolean delete(UUID timesheet_id) {
        try {
            Timesheet detail=this.detail(timesheet_id);
            if(detail!=null)
            {
                this.timesheetRepository.delete(detail);
                return true;
            }
            else {
                return false;
            }

        }
        catch (Exception e){
            return false;
        }

    }
}
