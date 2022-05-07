package classes;

import java.util.List;
import java.util.Scanner;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class App {

	public static void main(String[] args) {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("pu-mysql-02");
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		Scanner scanner = new Scanner(System.in);

		int i = 0;
		while (i != 1) {
			System.out.println("=================");
			System.out.println("EMPLOYEE DETAILS");
			System.out.println("=================");
			System.out.println();
			System.out.println("1.Press 1 to enter a new Employee Details");
			System.out.println("2.Press 2 to Login");
			System.out.println("3.Press any other key to exit");
			int option1 = scanner.nextInt();
			switch (option1) {
			case 1: {
				System.out.println("Enter the Employee name:");
				String name = scanner.next();
				scanner.nextLine();
				System.out.println("Enter the Employee type:");
				String type = scanner.nextLine();
				scanner.nextLine();
				System.out.println("Enter the email-id:");
				String email = scanner.nextLine();
				scanner.nextLine();
				System.out.println("Enter the password:");
				String password = scanner.nextLine();
				scanner.nextLine();
				EmployeeInfo employee = new EmployeeInfo(name, type, email, password);
				transaction.begin();
				manager.persist(employee);
				transaction.commit();
			}
				break;
			case 2: {
				System.out.println("Enter the Employee id:");
				int id = scanner.nextInt();
				String check = "from EmployeeInfo where employeeId=:id";
				Query query = manager.createQuery(check);
				query.setParameter("id", id);
				EmployeeInfo employee = (EmployeeInfo) query.getSingleResult();
				String Pswd = employee.getPassword();
				int k = 0;
				while (k != 1) {
					System.out.println("Enter the password");
					String password = scanner.next();
					if (password.equals(Pswd))
						k = 1;
					else
						System.out.println("Enter the correct password");
				}

				String EmpType = "select employeeType from EmployeeInfo where employeeId=:id";
				Query query2 = manager.createQuery(EmpType);
				query2.setParameter("id", id);
				String str = (String) query2.getSingleResult();
				String Manager = str.toLowerCase();

				int j = 0;
				while (j != 1) {
					switch (Manager) {
					case "manager": {
						System.out.println("1.Press 1 to show all leave requests");
						System.out.println("2.press 2 to Approve/Reject the leave request");
						System.out.println("3.Press 3 to exit to main menu");
						int option2 = scanner.nextInt();
						switch (option2) {
						case 1: {
							String Leave = "from EmpLeave";
							Query listQuery = manager.createQuery(Leave);
							List list = listQuery.getResultList();
							for (Object object : list) {
								EmpLeave empleave = (EmpLeave) object;
								System.out.println(
										"===================================================================================================================");
								System.out.println(empleave);
								System.out.println(
										"===================================================================================================================");

							}
						}

							break;
						case 2: {
							System.out.println("ENTER LEAVE ID");
							int leaveId = scanner.nextInt();
							String leave = "select leaveStatus from EmpLeave where leaveId=:id";
							Query leaveQuery = manager.createQuery(leave);
							leaveQuery.setParameter("id", leaveId);
							System.out.println("TO APPROVE LEAVE ENTER 1");
							System.out.println("TO REJECT LEAVE ENTER 2");
							int leaveStatus = scanner.nextInt();
							String status = "";
							String update = "";
							if (leaveStatus == 1) {
								update = "Approved";
								status = "update EmpLeave set leaveStatus=:n where leaveId=:id";
							} else if (leaveStatus == 2) {
								update = "Rejected";
								status = "update EmpLeave set leaveStatus=:n where leaveId=:id";
							} else
								update = "Pending";
							Query Query = manager.createQuery(status);
							Query.setParameter("id", leaveId);
							Query.setParameter("n", update);
							transaction.begin();
							Query.executeUpdate();
							transaction.commit();
						}

							break;
						case 3:
							j = 1;
						default:
							System.out.println(
									"===================================================================================================================");
							System.out.println("Invalid Input! Enter Again");
							System.out.println(
									"===================================================================================================================");

							break;
						}
					}
						break;
					case "employee": {
						System.out.println("1.Press 1 to show status of applied leave requests");
						System.out.println("2.Press 2 to apply new leave request");
						System.out.println("3.Press 3 to exit to main menu");
						int leaveReq = scanner.nextInt();
						switch (leaveReq) {
						case 1: {
							String myleave = "from EmpLeave where employeeId=:id";
							Query leaveQuery = manager.createQuery(myleave);
							leaveQuery.setParameter("id", id);
							List listLeave = leaveQuery.getResultList();
							for (Object object : listLeave) {
								EmpLeave leave = (EmpLeave) object;
								System.out.println(
										"==========================================================================================================================================");
								System.out.println(leave);
								System.out.println(
										"=========================================================================================================================================");

							}
						}
							break;
						case 2: {
							System.out.println("ENTER THE DATE OF LEAVE");
							String date = scanner.next();
							EmpLeave leave = new EmpLeave(date, id);
							transaction.begin();
							manager.persist(leave);
							transaction.commit();
						}
							break;
						case 3:
							j = 1;
							break;
						default:
							System.out.println("Invalid Input!");
							break;
						}
					}
						break;
					default:
						break;
					}
				}
			}
				break;
			default:
				i = 1;
				break;
			}
		}
	}
}
