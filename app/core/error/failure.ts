abstract class Failure {
    public readonly message: string;
  
    constructor(message: string) {
      this.message = message;
    }
  }
  
  export class NetworkFailure extends Failure {
    constructor() {
      super(ErrorMessages.noInternetConnection);
    }
  }
  
  export class ServerFailure extends Failure {
    constructor(message: string) {
      super(message);
    }
  }
  
  export class CacheFailure extends Failure {
    constructor() {
      super(ErrorMessages.cacheError);
    }
  }
  
  export class UnknownFailure extends Failure {
    constructor() {
      super(ErrorMessages.unexpectedError);
    }
  }
  
  class ErrorMessages {
    static readonly noInternetConnection = '🛜No internet connection. Please try again.';
    static readonly cacheError = '🔎Failed to load from cache. Please try again.';
    static readonly unexpectedError = '🤨Something went wrong. Please try again.';
  }