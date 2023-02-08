package ipeps.pwd.wallet.repository;

import ipeps.pwd.wallet.entity.Timesheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface TimesheetRepository extends JpaRepository<Timesheet, UUID> {

   @Query("Select t FROM Timesheet t where t.Employee.Employee_id= :employeeID")
   List<Timesheet> listByEmployeeID(@Param("employeeID")UUID employee_id);
}
