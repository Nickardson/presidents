declare module "presidents" {
  /**
   * Represents an period of time a president was in office.
   */
  declare class President {
    /**
     * The presidents are numbered according to uninterrupted periods of time served by the same person.
     * For example, George Washington served two consecutive terms and is counted as the first president (not the first and second).
     * 
     * Grover Cleveland was both the 22nd president and the 24th president because his two terms were not consecutive.
     */
    order: number;

    /**
     * The name of this president.
     */
    name: string;

    /**
     * The term served for this entry.
     * In the case of Grover Cleveland, there are two separate 'President' objects with distinct terms.
     */
    term: {
      /**
       * Year entered office.
       */
      startYear: number,

      /**
       * Year left office, or undefined if the president hasn't left office yet.
       */
      endYear?: number,
    };

    /**
     * The party this president belongs to / belonged to while in office.
     */
    party: string;

    /**
     * Information about birth/death.
     */
    life: {
      /**
       * The year of birth.
       */
      birthYear: number;

      /**
       * The year of death, or undefined if not dead.
       */
      deathYear?: number;
    }
  }

  export = {} as {
    /**
     * Each President object represents an period of time a president was in office.
     */
    presidents: President[];
  };
}
