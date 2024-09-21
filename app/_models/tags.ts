export class Tag {
  static  ANGULAR = new Tag("Angular", "#5a7581");
  static  SQL = new Tag("SQL", "#355158");
  static  PYTHON = new Tag("Python", "#4a6a77");
  static  SELENIUM = new Tag("Selenium Driver", "#4a6a77");
  static  PANDAS = new Tag("Pandas", "#4a6a77");
  static  POSTMAN = new Tag("Postman", "#355158");
  static  JAVASCRIPT = new Tag("Javascript", "#192129");
  static  HTML5 = new Tag("HTML5", "#192129");
  static  CSS3 = new Tag("CSS3", "#192129");
  static  DOCKER = new Tag("Docker", "#355158");
  static  CPP = new Tag("C++", "#f34b7d"); 
  static  R = new Tag("R", "#276DC3"); 
  static  MATLAB = new Tag("MATLAB", "#E67A22"); 
  static  STL = new Tag("STL", "#4a6a77"); 

  private constructor(
    private  key: string,
    public  color: string
  ) {}

  toString() {
    return this.key;
  }
}
