package ipeps.pwd.wallet.repository;

import ipeps.pwd.wallet.entity.Salary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SalaryRepository extends JpaRepository<Salary, UUID> {
}
