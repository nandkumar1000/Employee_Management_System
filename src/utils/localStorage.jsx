const employees = [
  {
    "id": 1,
    "firstname": "Rahul",
    "email": "nand1@gmail.com",
    "password": "password123",
    "tasks": [
      {
        "title": "Submit report",
        "description": "Prepare and submit the quarterly sales report.",
        "date": "2025-06-01",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team meeting",
        "description": "Attend the weekly team sync-up.",
        "date": "2025-05-29",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Update dashboard",
        "description": "Make changes to the performance dashboard.",
        "date": "2025-05-30",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstname": "Priya",
    "email": "nand2@gmail.com",
    "password": "password123",
    "tasks": [
      {
        "title": "Client follow-up",
        "description": "Email client regarding feedback.",
        "date": "2025-06-02",
        "category": "Communication",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Bug fix",
        "description": "Resolve login redirect issue.",
        "date": "2025-06-01",
        "category": "Bug Fixes",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Backup database",
        "description": "Create weekly database backup.",
        "date": "2025-05-28",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Write test cases",
        "description": "Add test cases for new module.",
        "date": "2025-06-03",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 2,
      "newTask": 2,
      "completed": 2,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstname": "Amit",
    "email": "nand3@gmail.com",
    "password": "password123",
    "tasks": [
      {
        "title": "Research competitors",
        "description": "Analyze top 5 competitors’ features.",
        "date": "2025-06-01",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Design landing page",
        "description": "Create a new design for homepage.",
        "date": "2025-06-05",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team feedback session",
        "description": "Conduct monthly feedback meeting.",
        "date": "2025-06-07",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumber": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstname": "Sneha",
    "email": "nand4@gmail.com",
    "password": "password123",
    "tasks": [
      {
        "title": "Create social media post",
        "description": "Design post for product launch.",
        "date": "2025-05-30",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Schedule newsletter",
        "description": "Prepare June’s email newsletter.",
        "date": "2025-06-01",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Customer feedback analysis",
        "description": "Analyze reviews from last month.",
        "date": "2025-06-03",
        "category": "Support",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstname": "Vikram",
    "email": "nand5@gmail.com",
    "password": "password123",
    "tasks": [
      {
        "title": "Security patch",
        "description": "Apply latest system security updates.",
        "date": "2025-05-29",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Document API",
        "description": "Write documentation for payment API.",
        "date": "2025-06-04",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

const Admin = [
  {
    "id": 1,
    "firstname": "Admin",
    "email": "admin@me.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  // console.log("Setting localStorage initial data...");
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('Admin', JSON.stringify(Admin));
  console.log("localStorage initialized.");
};

export const getLocalStorage = () => {
  // console.log("Attempting to get localStorage data...");
  const employeesData = localStorage.getItem('employees');
  const adminData = localStorage.getItem('Admin');

  const parsedEmployees = employeesData ? JSON.parse(employeesData) : [];
  const parsedAdmin = adminData ? JSON.parse(adminData) : [];

  const result = {
    employees: parsedEmployees,
    admin: parsedAdmin
  };
  // console.log("getLocalStorage returning:", result);
  return result;
};
