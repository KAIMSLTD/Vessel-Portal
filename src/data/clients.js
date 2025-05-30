
const clients = [
  {
    code: "ABC123",
    name: "Alpha Marine Ltd.",
    vessels: [
      {
        name: "Vessel One",
        mges: {
          "MGE 1": {
            overhaulDates: [
              {
                date: "2025-06-01",
                workReports: ["report1.pdf"],
                photos: ["photo1.jpg"],
                commercial: ["invoice1.pdf"],
                documents: ["manual1.pdf"]
              }
            ]
          }
        }
      }
    ]
  }
];
export default clients;
