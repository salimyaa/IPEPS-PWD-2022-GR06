package ipeps.pwd.wallet.repository;

import ipeps.pwd.wallet.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CompanyRepository extends JpaRepository<Company, UUID> {
}
