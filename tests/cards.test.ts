import { Employee } from "./../src/repositories/employeeRepository";
import * as companyService from "../src/services/companyService.js";
import * as employeeService from "../src/services/employeeService.js";

describe("create cards", () => {
	describe("should create card", async () => {
		jest.spyOn(companyService, "validateApiKeyOrFail").mockResolvedValue();
	});
});
