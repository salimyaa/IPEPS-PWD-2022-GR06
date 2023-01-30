package ipeps.pwd.wallet.repository;

import ipeps.pwd.wallet.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;
public interface ContractRepository extends JpaRepository<Contract, UUID>{
    @Query("SELECT c FROM Contract c where c.employee.Employee_id= :employeeID")
    List<Contract> listByEmployeeID(@Param("employeeID") UUID EmployeeID);
}