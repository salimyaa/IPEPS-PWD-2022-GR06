package ipeps.pwd.wallet.repository;

import java.util.List;
import java.util.UUID;

public interface CrudService<T> {
    public List<T> list();

    public T detail(UUID Employee_id);

    public T create(T payload);

    public T update(T payload);

    public void delete(UUID Employee_id);
}
