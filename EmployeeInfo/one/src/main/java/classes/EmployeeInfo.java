package classes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class EmployeeInfo {

	public EmployeeInfo(String employeeName, String employeeType, String email, String password) {
		super();
		this.employeeName = employeeName;
		this.employeeType = employeeType;
		this.email = email;
		this.password = password;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int employeeId;

	private String employeeName;

	private String employeeType;

	private String email;

	private String password;
}
