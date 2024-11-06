function generateFakeData(numRows) {
    const data = [];
    const properties = ["name", "email", "age", "city", "country", "occupation"];
  
    for (let i = 0; i < numRows; i++) {
      const row = {};
      for (const property of properties) {
        switch (property) {
          case "name":
            row[property] = generateRandomName();
            break;
          case "email":
            row[property] = generateRandomEmail();
            break;
          case "age":
            row[property] = Math.floor(Math.random() * 100);
            break;
          case "city":
            row[property] = generateRandomCity();
            break;
          case "country":
            row[property] = generateRandomCountry();
            break;
          case "occupation":
            row[property] = generateRandomOccupation();
            break;
        }
      }
      data.push(row);
    }
  
    return data;
  }
  
  function generateRandomName() {
    const firstNames = [
      "John",
      "Jane",
      "Michael",
      "Emily",
      "David",
      "Olivia",
      "William",
      "Sophia",
      "James",
      "Ava",
    ];
    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Miller",
      "Davis",
      "Garcia",
      "Rodriguez",
      "Wilson",
    ];
  
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
    return `${firstName}   
     ${lastName}`;
  }
  
  function generateRandomEmail() {
    const domains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "example.com",
    ];
  
    const username = generateRandomName().replace(/\s/g, "").toLowerCase();
    const domain = domains[Math.floor(Math.random() * domains.length)];
  
    return `${username}@${domain}`;
  }
  
  function generateRandomCity() {
    const cities = [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "Austin",
    ];
  
    return cities[Math.floor(Math.random() * cities.length)];
  }
  
  function generateRandomCountry() {
    const countries = [
      "United States",
      "Canada",
      "China",
      "India",
      "Russia",
      "Brazil",
      "Japan",
      "Mexico",
      "Germany",
      "France",
    ];
  
    return countries[Math.floor(Math.random() * countries.length)];
  }
  
  function generateRandomOccupation() {
    const occupations = [
      "Software Engineer",
      "Teacher",
      "Doctor",
      "Lawyer",
      "Nurse",
      "Salesperson",
      "Manager",
      "Designer",
      "Artist",
      "Writer",
    ];
  
    return occupations[Math.floor(Math.random() * occupations.length)];
  }
  
  export const fakeData = generateFakeData(100) as IFakeData[];
  
  export interface IFakeData {
    name: string;
    email: string;
    age: number;
    city: string;
    country: string;
    occupation: string;
  }
  