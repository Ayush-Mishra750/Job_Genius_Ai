
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Employer
 * 
 */
export type Employer = $Result.DefaultSelection<Prisma.$EmployerPayload>
/**
 * Model Applicant
 * 
 */
export type Applicant = $Result.DefaultSelection<Prisma.$ApplicantPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model JobApplication
 * 
 */
export type JobApplication = $Result.DefaultSelection<Prisma.$JobApplicationPayload>
/**
 * Model SavedJob
 * 
 */
export type SavedJob = $Result.DefaultSelection<Prisma.$SavedJobPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model CoverLetter
 * 
 */
export type CoverLetter = $Result.DefaultSelection<Prisma.$CoverLetterPayload>
/**
 * Model Assessment
 * 
 */
export type Assessment = $Result.DefaultSelection<Prisma.$AssessmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  applicant: 'applicant',
  employer: 'employer'
};

export type Role = (typeof Role)[keyof typeof Role]


export const MaritalStatus: {
  single: 'single',
  married: 'married',
  divorced: 'divorced'
};

export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus]


export const Gender: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const EducationLevel: {
  none: 'none',
  high_school: 'high_school',
  undergraduate: 'undergraduate',
  masters: 'masters',
  phd: 'phd'
};

export type EducationLevel = (typeof EducationLevel)[keyof typeof EducationLevel]


export const ApplicationStatus: {
  pending: 'pending',
  shortlisted: 'shortlisted',
  interview: 'interview',
  rejected: 'rejected',
  hired: 'hired'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type MaritalStatus = $Enums.MaritalStatus

export const MaritalStatus: typeof $Enums.MaritalStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type EducationLevel = $Enums.EducationLevel

export const EducationLevel: typeof $Enums.EducationLevel

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employer`: Exposes CRUD operations for the **Employer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employers
    * const employers = await prisma.employer.findMany()
    * ```
    */
  get employer(): Prisma.EmployerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicant`: Exposes CRUD operations for the **Applicant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applicants
    * const applicants = await prisma.applicant.findMany()
    * ```
    */
  get applicant(): Prisma.ApplicantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobApplication`: Exposes CRUD operations for the **JobApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobApplications
    * const jobApplications = await prisma.jobApplication.findMany()
    * ```
    */
  get jobApplication(): Prisma.JobApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedJob`: Exposes CRUD operations for the **SavedJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedJobs
    * const savedJobs = await prisma.savedJob.findMany()
    * ```
    */
  get savedJob(): Prisma.SavedJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coverLetter`: Exposes CRUD operations for the **CoverLetter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoverLetters
    * const coverLetters = await prisma.coverLetter.findMany()
    * ```
    */
  get coverLetter(): Prisma.CoverLetterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessment`: Exposes CRUD operations for the **Assessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assessments
    * const assessments = await prisma.assessment.findMany()
    * ```
    */
  get assessment(): Prisma.AssessmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Employer: 'Employer',
    Applicant: 'Applicant',
    Job: 'Job',
    JobApplication: 'JobApplication',
    SavedJob: 'SavedJob',
    Resume: 'Resume',
    CoverLetter: 'CoverLetter',
    Assessment: 'Assessment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "employer" | "applicant" | "job" | "jobApplication" | "savedJob" | "resume" | "coverLetter" | "assessment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Employer: {
        payload: Prisma.$EmployerPayload<ExtArgs>
        fields: Prisma.EmployerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          findFirst: {
            args: Prisma.EmployerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          findMany: {
            args: Prisma.EmployerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>[]
          }
          create: {
            args: Prisma.EmployerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          createMany: {
            args: Prisma.EmployerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>[]
          }
          delete: {
            args: Prisma.EmployerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          update: {
            args: Prisma.EmployerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          deleteMany: {
            args: Prisma.EmployerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>[]
          }
          upsert: {
            args: Prisma.EmployerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          aggregate: {
            args: Prisma.EmployerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployer>
          }
          groupBy: {
            args: Prisma.EmployerGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployerGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployerCountArgs<ExtArgs>
            result: $Utils.Optional<EmployerCountAggregateOutputType> | number
          }
        }
      }
      Applicant: {
        payload: Prisma.$ApplicantPayload<ExtArgs>
        fields: Prisma.ApplicantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          findFirst: {
            args: Prisma.ApplicantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          findMany: {
            args: Prisma.ApplicantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[]
          }
          create: {
            args: Prisma.ApplicantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          createMany: {
            args: Prisma.ApplicantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[]
          }
          delete: {
            args: Prisma.ApplicantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          update: {
            args: Prisma.ApplicantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          deleteMany: {
            args: Prisma.ApplicantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[]
          }
          upsert: {
            args: Prisma.ApplicantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          aggregate: {
            args: Prisma.ApplicantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicant>
          }
          groupBy: {
            args: Prisma.ApplicantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicantCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicantCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      JobApplication: {
        payload: Prisma.$JobApplicationPayload<ExtArgs>
        fields: Prisma.JobApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findFirst: {
            args: Prisma.JobApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findMany: {
            args: Prisma.JobApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          create: {
            args: Prisma.JobApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          createMany: {
            args: Prisma.JobApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          delete: {
            args: Prisma.JobApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          update: {
            args: Prisma.JobApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          deleteMany: {
            args: Prisma.JobApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          upsert: {
            args: Prisma.JobApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          aggregate: {
            args: Prisma.JobApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobApplication>
          }
          groupBy: {
            args: Prisma.JobApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationCountAggregateOutputType> | number
          }
        }
      }
      SavedJob: {
        payload: Prisma.$SavedJobPayload<ExtArgs>
        fields: Prisma.SavedJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedJobPayload>
          }
          findFirst: {
            args: Prisma.SavedJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedJobPayload>
          }
          findMany: {
            args: Prisma.SavedJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedJobPayload>[]
          }
          create: {
            args: Prisma.SavedJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedJobPayload>
          }
          createMany: {
            args: Prisma.SavedJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedJobPayload>[]
          }
          delete: {
            args: Prisma.SavedJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedJobPayload>
          }
          update: {
            args: Prisma.SavedJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedJobPayload>
          }
          deleteMany: {
            args: Prisma.SavedJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedJobPayload>[]
          }
          upsert: {
            args: Prisma.SavedJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedJobPayload>
          }
          aggregate: {
            args: Prisma.SavedJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedJob>
          }
          groupBy: {
            args: Prisma.SavedJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedJobCountArgs<ExtArgs>
            result: $Utils.Optional<SavedJobCountAggregateOutputType> | number
          }
        }
      }
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      CoverLetter: {
        payload: Prisma.$CoverLetterPayload<ExtArgs>
        fields: Prisma.CoverLetterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoverLetterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoverLetterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          findFirst: {
            args: Prisma.CoverLetterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoverLetterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          findMany: {
            args: Prisma.CoverLetterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>[]
          }
          create: {
            args: Prisma.CoverLetterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          createMany: {
            args: Prisma.CoverLetterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoverLetterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>[]
          }
          delete: {
            args: Prisma.CoverLetterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          update: {
            args: Prisma.CoverLetterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          deleteMany: {
            args: Prisma.CoverLetterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoverLetterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoverLetterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>[]
          }
          upsert: {
            args: Prisma.CoverLetterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          aggregate: {
            args: Prisma.CoverLetterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoverLetter>
          }
          groupBy: {
            args: Prisma.CoverLetterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoverLetterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoverLetterCountArgs<ExtArgs>
            result: $Utils.Optional<CoverLetterCountAggregateOutputType> | number
          }
        }
      }
      Assessment: {
        payload: Prisma.$AssessmentPayload<ExtArgs>
        fields: Prisma.AssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findFirst: {
            args: Prisma.AssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findMany: {
            args: Prisma.AssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          create: {
            args: Prisma.AssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          createMany: {
            args: Prisma.AssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          delete: {
            args: Prisma.AssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          update: {
            args: Prisma.AssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssessmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          upsert: {
            args: Prisma.AssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessment>
          }
          groupBy: {
            args: Prisma.AssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    employer?: EmployerOmit
    applicant?: ApplicantOmit
    job?: JobOmit
    jobApplication?: JobApplicationOmit
    savedJob?: SavedJobOmit
    resume?: ResumeOmit
    coverLetter?: CoverLetterOmit
    assessment?: AssessmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    savedJobs: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedJobs?: boolean | UserCountOutputTypeCountSavedJobsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedJobWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type EmployerCountOutputType
   */

  export type EmployerCountOutputType = {
    jobs: number
  }

  export type EmployerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | EmployerCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * EmployerCountOutputType without action
   */
  export type EmployerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerCountOutputType
     */
    select?: EmployerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployerCountOutputType without action
   */
  export type EmployerCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }


  /**
   * Count Type ApplicantCountOutputType
   */

  export type ApplicantCountOutputType = {
    applications: number
    resumes: number
    coverLetter: number
    assessments: number
  }

  export type ApplicantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | ApplicantCountOutputTypeCountApplicationsArgs
    resumes?: boolean | ApplicantCountOutputTypeCountResumesArgs
    coverLetter?: boolean | ApplicantCountOutputTypeCountCoverLetterArgs
    assessments?: boolean | ApplicantCountOutputTypeCountAssessmentsArgs
  }

  // Custom InputTypes
  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantCountOutputType
     */
    select?: ApplicantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountCoverLetterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverLetterWhereInput
  }

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    applications: number
    savedJobs: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobCountOutputTypeCountApplicationsArgs
    savedJobs?: boolean | JobCountOutputTypeCountSavedJobsArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountSavedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedJobWhereInput
  }


  /**
   * Count Type ResumeCountOutputType
   */

  export type ResumeCountOutputType = {
    applications: number
  }

  export type ResumeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | ResumeCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeCountOutputType
     */
    select?: ResumeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    userName: string | null
    password: string | null
    email: string | null
    role: $Enums.Role | null
    phoneNumber: string | null
    avatarUrl: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userName: string | null
    password: string | null
    email: string | null
    role: $Enums.Role | null
    phoneNumber: string | null
    avatarUrl: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    userName: number
    password: number
    email: number
    role: number
    phoneNumber: number
    avatarUrl: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    userName?: true
    password?: true
    email?: true
    role?: true
    phoneNumber?: true
    avatarUrl?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    userName?: true
    password?: true
    email?: true
    role?: true
    phoneNumber?: true
    avatarUrl?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    userName?: true
    password?: true
    email?: true
    role?: true
    phoneNumber?: true
    avatarUrl?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    userName: string
    password: string
    email: string
    role: $Enums.Role
    phoneNumber: string | null
    avatarUrl: string | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userName?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    phoneNumber?: boolean
    avatarUrl?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | User$applicantArgs<ExtArgs>
    employer?: boolean | User$employerArgs<ExtArgs>
    savedJobs?: boolean | User$savedJobsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userName?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    phoneNumber?: boolean
    avatarUrl?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userName?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    phoneNumber?: boolean
    avatarUrl?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    userName?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    phoneNumber?: boolean
    avatarUrl?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userName" | "password" | "email" | "role" | "phoneNumber" | "avatarUrl" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | User$applicantArgs<ExtArgs>
    employer?: boolean | User$employerArgs<ExtArgs>
    savedJobs?: boolean | User$savedJobsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs> | null
      employer: Prisma.$EmployerPayload<ExtArgs> | null
      savedJobs: Prisma.$SavedJobPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userName: string
      password: string
      email: string
      role: $Enums.Role
      phoneNumber: string | null
      avatarUrl: string | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends User$applicantArgs<ExtArgs> = {}>(args?: Subset<T, User$applicantArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employer<T extends User$employerArgs<ExtArgs> = {}>(args?: Subset<T, User$employerArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    savedJobs<T extends User$savedJobsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.applicant
   */
  export type User$applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    where?: ApplicantWhereInput
  }

  /**
   * User.employer
   */
  export type User$employerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    where?: EmployerWhereInput
  }

  /**
   * User.savedJobs
   */
  export type User$savedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobInclude<ExtArgs> | null
    where?: SavedJobWhereInput
    orderBy?: SavedJobOrderByWithRelationInput | SavedJobOrderByWithRelationInput[]
    cursor?: SavedJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedJobScalarFieldEnum | SavedJobScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: number | null
    userAgent: string | null
    ip: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    userAgent: string | null
    ip: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    userAgent: number
    ip: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    userAgent?: true
    ip?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    userAgent?: true
    ip?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    userAgent?: true
    ip?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: number
    userAgent: string
    ip: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userAgent?: boolean
    ip?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userAgent?: boolean
    ip?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userAgent?: boolean
    ip?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    userAgent?: boolean
    ip?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userAgent" | "ip" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      userAgent: string
      ip: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'Int'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly ip: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Employer
   */

  export type AggregateEmployer = {
    _count: EmployerCountAggregateOutputType | null
    _avg: EmployerAvgAggregateOutputType | null
    _sum: EmployerSumAggregateOutputType | null
    _min: EmployerMinAggregateOutputType | null
    _max: EmployerMaxAggregateOutputType | null
  }

  export type EmployerAvgAggregateOutputType = {
    id: number | null
    yearOfEstablishment: number | null
  }

  export type EmployerSumAggregateOutputType = {
    id: number | null
    yearOfEstablishment: number | null
  }

  export type EmployerMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    bannerImageUrl: string | null
    organizationType: string | null
    teamSize: string | null
    yearOfEstablishment: number | null
    websiteUrl: string | null
    location: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    bannerImageUrl: string | null
    organizationType: string | null
    teamSize: string | null
    yearOfEstablishment: number | null
    websiteUrl: string | null
    location: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployerCountAggregateOutputType = {
    id: number
    name: number
    description: number
    bannerImageUrl: number
    organizationType: number
    teamSize: number
    yearOfEstablishment: number
    websiteUrl: number
    location: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployerAvgAggregateInputType = {
    id?: true
    yearOfEstablishment?: true
  }

  export type EmployerSumAggregateInputType = {
    id?: true
    yearOfEstablishment?: true
  }

  export type EmployerMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    bannerImageUrl?: true
    organizationType?: true
    teamSize?: true
    yearOfEstablishment?: true
    websiteUrl?: true
    location?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployerMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    bannerImageUrl?: true
    organizationType?: true
    teamSize?: true
    yearOfEstablishment?: true
    websiteUrl?: true
    location?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployerCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    bannerImageUrl?: true
    organizationType?: true
    teamSize?: true
    yearOfEstablishment?: true
    websiteUrl?: true
    location?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employer to aggregate.
     */
    where?: EmployerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employers to fetch.
     */
    orderBy?: EmployerOrderByWithRelationInput | EmployerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employers
    **/
    _count?: true | EmployerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployerMaxAggregateInputType
  }

  export type GetEmployerAggregateType<T extends EmployerAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployer[P]>
      : GetScalarType<T[P], AggregateEmployer[P]>
  }




  export type EmployerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployerWhereInput
    orderBy?: EmployerOrderByWithAggregationInput | EmployerOrderByWithAggregationInput[]
    by: EmployerScalarFieldEnum[] | EmployerScalarFieldEnum
    having?: EmployerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployerCountAggregateInputType | true
    _avg?: EmployerAvgAggregateInputType
    _sum?: EmployerSumAggregateInputType
    _min?: EmployerMinAggregateInputType
    _max?: EmployerMaxAggregateInputType
  }

  export type EmployerGroupByOutputType = {
    id: number
    name: string | null
    description: string | null
    bannerImageUrl: string | null
    organizationType: string | null
    teamSize: string | null
    yearOfEstablishment: number | null
    websiteUrl: string | null
    location: string | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EmployerCountAggregateOutputType | null
    _avg: EmployerAvgAggregateOutputType | null
    _sum: EmployerSumAggregateOutputType | null
    _min: EmployerMinAggregateOutputType | null
    _max: EmployerMaxAggregateOutputType | null
  }

  type GetEmployerGroupByPayload<T extends EmployerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployerGroupByOutputType[P]>
            : GetScalarType<T[P], EmployerGroupByOutputType[P]>
        }
      >
    >


  export type EmployerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    bannerImageUrl?: boolean
    organizationType?: boolean
    teamSize?: boolean
    yearOfEstablishment?: boolean
    websiteUrl?: boolean
    location?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobs?: boolean | Employer$jobsArgs<ExtArgs>
    _count?: boolean | EmployerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employer"]>

  export type EmployerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    bannerImageUrl?: boolean
    organizationType?: boolean
    teamSize?: boolean
    yearOfEstablishment?: boolean
    websiteUrl?: boolean
    location?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employer"]>

  export type EmployerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    bannerImageUrl?: boolean
    organizationType?: boolean
    teamSize?: boolean
    yearOfEstablishment?: boolean
    websiteUrl?: boolean
    location?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employer"]>

  export type EmployerSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    bannerImageUrl?: boolean
    organizationType?: boolean
    teamSize?: boolean
    yearOfEstablishment?: boolean
    websiteUrl?: boolean
    location?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "bannerImageUrl" | "organizationType" | "teamSize" | "yearOfEstablishment" | "websiteUrl" | "location" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["employer"]>
  export type EmployerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobs?: boolean | Employer$jobsArgs<ExtArgs>
    _count?: boolean | EmployerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmployerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmployerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jobs: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      description: string | null
      bannerImageUrl: string | null
      organizationType: string | null
      teamSize: string | null
      yearOfEstablishment: number | null
      websiteUrl: string | null
      location: string | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employer"]>
    composites: {}
  }

  type EmployerGetPayload<S extends boolean | null | undefined | EmployerDefaultArgs> = $Result.GetResult<Prisma.$EmployerPayload, S>

  type EmployerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployerCountAggregateInputType | true
    }

  export interface EmployerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employer'], meta: { name: 'Employer' } }
    /**
     * Find zero or one Employer that matches the filter.
     * @param {EmployerFindUniqueArgs} args - Arguments to find a Employer
     * @example
     * // Get one Employer
     * const employer = await prisma.employer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployerFindUniqueArgs>(args: SelectSubset<T, EmployerFindUniqueArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployerFindUniqueOrThrowArgs} args - Arguments to find a Employer
     * @example
     * // Get one Employer
     * const employer = await prisma.employer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployerFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerFindFirstArgs} args - Arguments to find a Employer
     * @example
     * // Get one Employer
     * const employer = await prisma.employer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployerFindFirstArgs>(args?: SelectSubset<T, EmployerFindFirstArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerFindFirstOrThrowArgs} args - Arguments to find a Employer
     * @example
     * // Get one Employer
     * const employer = await prisma.employer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployerFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployerFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employers
     * const employers = await prisma.employer.findMany()
     * 
     * // Get first 10 Employers
     * const employers = await prisma.employer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employerWithIdOnly = await prisma.employer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployerFindManyArgs>(args?: SelectSubset<T, EmployerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employer.
     * @param {EmployerCreateArgs} args - Arguments to create a Employer.
     * @example
     * // Create one Employer
     * const Employer = await prisma.employer.create({
     *   data: {
     *     // ... data to create a Employer
     *   }
     * })
     * 
     */
    create<T extends EmployerCreateArgs>(args: SelectSubset<T, EmployerCreateArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employers.
     * @param {EmployerCreateManyArgs} args - Arguments to create many Employers.
     * @example
     * // Create many Employers
     * const employer = await prisma.employer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployerCreateManyArgs>(args?: SelectSubset<T, EmployerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employers and returns the data saved in the database.
     * @param {EmployerCreateManyAndReturnArgs} args - Arguments to create many Employers.
     * @example
     * // Create many Employers
     * const employer = await prisma.employer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employers and only return the `id`
     * const employerWithIdOnly = await prisma.employer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployerCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employer.
     * @param {EmployerDeleteArgs} args - Arguments to delete one Employer.
     * @example
     * // Delete one Employer
     * const Employer = await prisma.employer.delete({
     *   where: {
     *     // ... filter to delete one Employer
     *   }
     * })
     * 
     */
    delete<T extends EmployerDeleteArgs>(args: SelectSubset<T, EmployerDeleteArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employer.
     * @param {EmployerUpdateArgs} args - Arguments to update one Employer.
     * @example
     * // Update one Employer
     * const employer = await prisma.employer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployerUpdateArgs>(args: SelectSubset<T, EmployerUpdateArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employers.
     * @param {EmployerDeleteManyArgs} args - Arguments to filter Employers to delete.
     * @example
     * // Delete a few Employers
     * const { count } = await prisma.employer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployerDeleteManyArgs>(args?: SelectSubset<T, EmployerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employers
     * const employer = await prisma.employer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployerUpdateManyArgs>(args: SelectSubset<T, EmployerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employers and returns the data updated in the database.
     * @param {EmployerUpdateManyAndReturnArgs} args - Arguments to update many Employers.
     * @example
     * // Update many Employers
     * const employer = await prisma.employer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employers and only return the `id`
     * const employerWithIdOnly = await prisma.employer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployerUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employer.
     * @param {EmployerUpsertArgs} args - Arguments to update or create a Employer.
     * @example
     * // Update or create a Employer
     * const employer = await prisma.employer.upsert({
     *   create: {
     *     // ... data to create a Employer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employer we want to update
     *   }
     * })
     */
    upsert<T extends EmployerUpsertArgs>(args: SelectSubset<T, EmployerUpsertArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerCountArgs} args - Arguments to filter Employers to count.
     * @example
     * // Count the number of Employers
     * const count = await prisma.employer.count({
     *   where: {
     *     // ... the filter for the Employers we want to count
     *   }
     * })
    **/
    count<T extends EmployerCountArgs>(
      args?: Subset<T, EmployerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployerAggregateArgs>(args: Subset<T, EmployerAggregateArgs>): Prisma.PrismaPromise<GetEmployerAggregateType<T>>

    /**
     * Group by Employer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployerGroupByArgs['orderBy'] }
        : { orderBy?: EmployerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employer model
   */
  readonly fields: EmployerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jobs<T extends Employer$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Employer$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employer model
   */
  interface EmployerFieldRefs {
    readonly id: FieldRef<"Employer", 'Int'>
    readonly name: FieldRef<"Employer", 'String'>
    readonly description: FieldRef<"Employer", 'String'>
    readonly bannerImageUrl: FieldRef<"Employer", 'String'>
    readonly organizationType: FieldRef<"Employer", 'String'>
    readonly teamSize: FieldRef<"Employer", 'String'>
    readonly yearOfEstablishment: FieldRef<"Employer", 'Int'>
    readonly websiteUrl: FieldRef<"Employer", 'String'>
    readonly location: FieldRef<"Employer", 'String'>
    readonly deletedAt: FieldRef<"Employer", 'DateTime'>
    readonly createdAt: FieldRef<"Employer", 'DateTime'>
    readonly updatedAt: FieldRef<"Employer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employer findUnique
   */
  export type EmployerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employer to fetch.
     */
    where: EmployerWhereUniqueInput
  }

  /**
   * Employer findUniqueOrThrow
   */
  export type EmployerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employer to fetch.
     */
    where: EmployerWhereUniqueInput
  }

  /**
   * Employer findFirst
   */
  export type EmployerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employer to fetch.
     */
    where?: EmployerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employers to fetch.
     */
    orderBy?: EmployerOrderByWithRelationInput | EmployerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employers.
     */
    cursor?: EmployerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employers.
     */
    distinct?: EmployerScalarFieldEnum | EmployerScalarFieldEnum[]
  }

  /**
   * Employer findFirstOrThrow
   */
  export type EmployerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employer to fetch.
     */
    where?: EmployerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employers to fetch.
     */
    orderBy?: EmployerOrderByWithRelationInput | EmployerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employers.
     */
    cursor?: EmployerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employers.
     */
    distinct?: EmployerScalarFieldEnum | EmployerScalarFieldEnum[]
  }

  /**
   * Employer findMany
   */
  export type EmployerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employers to fetch.
     */
    where?: EmployerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employers to fetch.
     */
    orderBy?: EmployerOrderByWithRelationInput | EmployerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employers.
     */
    cursor?: EmployerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employers.
     */
    skip?: number
    distinct?: EmployerScalarFieldEnum | EmployerScalarFieldEnum[]
  }

  /**
   * Employer create
   */
  export type EmployerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * The data needed to create a Employer.
     */
    data: XOR<EmployerCreateInput, EmployerUncheckedCreateInput>
  }

  /**
   * Employer createMany
   */
  export type EmployerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employers.
     */
    data: EmployerCreateManyInput | EmployerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employer createManyAndReturn
   */
  export type EmployerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * The data used to create many Employers.
     */
    data: EmployerCreateManyInput | EmployerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employer update
   */
  export type EmployerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * The data needed to update a Employer.
     */
    data: XOR<EmployerUpdateInput, EmployerUncheckedUpdateInput>
    /**
     * Choose, which Employer to update.
     */
    where: EmployerWhereUniqueInput
  }

  /**
   * Employer updateMany
   */
  export type EmployerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employers.
     */
    data: XOR<EmployerUpdateManyMutationInput, EmployerUncheckedUpdateManyInput>
    /**
     * Filter which Employers to update
     */
    where?: EmployerWhereInput
    /**
     * Limit how many Employers to update.
     */
    limit?: number
  }

  /**
   * Employer updateManyAndReturn
   */
  export type EmployerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * The data used to update Employers.
     */
    data: XOR<EmployerUpdateManyMutationInput, EmployerUncheckedUpdateManyInput>
    /**
     * Filter which Employers to update
     */
    where?: EmployerWhereInput
    /**
     * Limit how many Employers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employer upsert
   */
  export type EmployerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * The filter to search for the Employer to update in case it exists.
     */
    where: EmployerWhereUniqueInput
    /**
     * In case the Employer found by the `where` argument doesn't exist, create a new Employer with this data.
     */
    create: XOR<EmployerCreateInput, EmployerUncheckedCreateInput>
    /**
     * In case the Employer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployerUpdateInput, EmployerUncheckedUpdateInput>
  }

  /**
   * Employer delete
   */
  export type EmployerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter which Employer to delete.
     */
    where: EmployerWhereUniqueInput
  }

  /**
   * Employer deleteMany
   */
  export type EmployerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employers to delete
     */
    where?: EmployerWhereInput
    /**
     * Limit how many Employers to delete.
     */
    limit?: number
  }

  /**
   * Employer.jobs
   */
  export type Employer$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Employer without action
   */
  export type EmployerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
  }


  /**
   * Model Applicant
   */

  export type AggregateApplicant = {
    _count: ApplicantCountAggregateOutputType | null
    _avg: ApplicantAvgAggregateOutputType | null
    _sum: ApplicantSumAggregateOutputType | null
    _min: ApplicantMinAggregateOutputType | null
    _max: ApplicantMaxAggregateOutputType | null
  }

  export type ApplicantAvgAggregateOutputType = {
    id: number | null
  }

  export type ApplicantSumAggregateOutputType = {
    id: number | null
  }

  export type ApplicantMinAggregateOutputType = {
    id: number | null
    biography: string | null
    dateOfBirth: Date | null
    nationality: string | null
    maritalStatus: $Enums.MaritalStatus | null
    gender: $Enums.Gender | null
    education: $Enums.EducationLevel | null
    experience: string | null
    websiteUrl: string | null
    location: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicantMaxAggregateOutputType = {
    id: number | null
    biography: string | null
    dateOfBirth: Date | null
    nationality: string | null
    maritalStatus: $Enums.MaritalStatus | null
    gender: $Enums.Gender | null
    education: $Enums.EducationLevel | null
    experience: string | null
    websiteUrl: string | null
    location: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicantCountAggregateOutputType = {
    id: number
    biography: number
    dateOfBirth: number
    nationality: number
    maritalStatus: number
    gender: number
    education: number
    experience: number
    websiteUrl: number
    location: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicantAvgAggregateInputType = {
    id?: true
  }

  export type ApplicantSumAggregateInputType = {
    id?: true
  }

  export type ApplicantMinAggregateInputType = {
    id?: true
    biography?: true
    dateOfBirth?: true
    nationality?: true
    maritalStatus?: true
    gender?: true
    education?: true
    experience?: true
    websiteUrl?: true
    location?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicantMaxAggregateInputType = {
    id?: true
    biography?: true
    dateOfBirth?: true
    nationality?: true
    maritalStatus?: true
    gender?: true
    education?: true
    experience?: true
    websiteUrl?: true
    location?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicantCountAggregateInputType = {
    id?: true
    biography?: true
    dateOfBirth?: true
    nationality?: true
    maritalStatus?: true
    gender?: true
    education?: true
    experience?: true
    websiteUrl?: true
    location?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applicant to aggregate.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applicants
    **/
    _count?: true | ApplicantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicantMaxAggregateInputType
  }

  export type GetApplicantAggregateType<T extends ApplicantAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicant[P]>
      : GetScalarType<T[P], AggregateApplicant[P]>
  }




  export type ApplicantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicantWhereInput
    orderBy?: ApplicantOrderByWithAggregationInput | ApplicantOrderByWithAggregationInput[]
    by: ApplicantScalarFieldEnum[] | ApplicantScalarFieldEnum
    having?: ApplicantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicantCountAggregateInputType | true
    _avg?: ApplicantAvgAggregateInputType
    _sum?: ApplicantSumAggregateInputType
    _min?: ApplicantMinAggregateInputType
    _max?: ApplicantMaxAggregateInputType
  }

  export type ApplicantGroupByOutputType = {
    id: number
    biography: string | null
    dateOfBirth: Date | null
    nationality: string | null
    maritalStatus: $Enums.MaritalStatus | null
    gender: $Enums.Gender | null
    education: $Enums.EducationLevel | null
    experience: string | null
    websiteUrl: string | null
    location: string | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ApplicantCountAggregateOutputType | null
    _avg: ApplicantAvgAggregateOutputType | null
    _sum: ApplicantSumAggregateOutputType | null
    _min: ApplicantMinAggregateOutputType | null
    _max: ApplicantMaxAggregateOutputType | null
  }

  type GetApplicantGroupByPayload<T extends ApplicantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicantGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicantGroupByOutputType[P]>
        }
      >
    >


  export type ApplicantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    biography?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    maritalStatus?: boolean
    gender?: boolean
    education?: boolean
    experience?: boolean
    websiteUrl?: boolean
    location?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    applications?: boolean | Applicant$applicationsArgs<ExtArgs>
    resumes?: boolean | Applicant$resumesArgs<ExtArgs>
    coverLetter?: boolean | Applicant$coverLetterArgs<ExtArgs>
    assessments?: boolean | Applicant$assessmentsArgs<ExtArgs>
    _count?: boolean | ApplicantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicant"]>

  export type ApplicantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    biography?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    maritalStatus?: boolean
    gender?: boolean
    education?: boolean
    experience?: boolean
    websiteUrl?: boolean
    location?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicant"]>

  export type ApplicantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    biography?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    maritalStatus?: boolean
    gender?: boolean
    education?: boolean
    experience?: boolean
    websiteUrl?: boolean
    location?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicant"]>

  export type ApplicantSelectScalar = {
    id?: boolean
    biography?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    maritalStatus?: boolean
    gender?: boolean
    education?: boolean
    experience?: boolean
    websiteUrl?: boolean
    location?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "biography" | "dateOfBirth" | "nationality" | "maritalStatus" | "gender" | "education" | "experience" | "websiteUrl" | "location" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["applicant"]>
  export type ApplicantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    applications?: boolean | Applicant$applicationsArgs<ExtArgs>
    resumes?: boolean | Applicant$resumesArgs<ExtArgs>
    coverLetter?: boolean | Applicant$coverLetterArgs<ExtArgs>
    assessments?: boolean | Applicant$assessmentsArgs<ExtArgs>
    _count?: boolean | ApplicantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApplicantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Applicant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      applications: Prisma.$JobApplicationPayload<ExtArgs>[]
      resumes: Prisma.$ResumePayload<ExtArgs>[]
      coverLetter: Prisma.$CoverLetterPayload<ExtArgs>[]
      assessments: Prisma.$AssessmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      biography: string | null
      dateOfBirth: Date | null
      nationality: string | null
      maritalStatus: $Enums.MaritalStatus | null
      gender: $Enums.Gender | null
      education: $Enums.EducationLevel | null
      experience: string | null
      websiteUrl: string | null
      location: string | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["applicant"]>
    composites: {}
  }

  type ApplicantGetPayload<S extends boolean | null | undefined | ApplicantDefaultArgs> = $Result.GetResult<Prisma.$ApplicantPayload, S>

  type ApplicantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicantCountAggregateInputType | true
    }

  export interface ApplicantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Applicant'], meta: { name: 'Applicant' } }
    /**
     * Find zero or one Applicant that matches the filter.
     * @param {ApplicantFindUniqueArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicantFindUniqueArgs>(args: SelectSubset<T, ApplicantFindUniqueArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applicant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicantFindUniqueOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicantFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicantFindFirstArgs>(args?: SelectSubset<T, ApplicantFindFirstArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicantFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicant.findMany()
     * 
     * // Get first 10 Applicants
     * const applicants = await prisma.applicant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicantWithIdOnly = await prisma.applicant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicantFindManyArgs>(args?: SelectSubset<T, ApplicantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applicant.
     * @param {ApplicantCreateArgs} args - Arguments to create a Applicant.
     * @example
     * // Create one Applicant
     * const Applicant = await prisma.applicant.create({
     *   data: {
     *     // ... data to create a Applicant
     *   }
     * })
     * 
     */
    create<T extends ApplicantCreateArgs>(args: SelectSubset<T, ApplicantCreateArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applicants.
     * @param {ApplicantCreateManyArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicant = await prisma.applicant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicantCreateManyArgs>(args?: SelectSubset<T, ApplicantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applicants and returns the data saved in the database.
     * @param {ApplicantCreateManyAndReturnArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicant = await prisma.applicant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applicants and only return the `id`
     * const applicantWithIdOnly = await prisma.applicant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicantCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Applicant.
     * @param {ApplicantDeleteArgs} args - Arguments to delete one Applicant.
     * @example
     * // Delete one Applicant
     * const Applicant = await prisma.applicant.delete({
     *   where: {
     *     // ... filter to delete one Applicant
     *   }
     * })
     * 
     */
    delete<T extends ApplicantDeleteArgs>(args: SelectSubset<T, ApplicantDeleteArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applicant.
     * @param {ApplicantUpdateArgs} args - Arguments to update one Applicant.
     * @example
     * // Update one Applicant
     * const applicant = await prisma.applicant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicantUpdateArgs>(args: SelectSubset<T, ApplicantUpdateArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applicants.
     * @param {ApplicantDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicantDeleteManyArgs>(args?: SelectSubset<T, ApplicantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicantUpdateManyArgs>(args: SelectSubset<T, ApplicantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applicants and returns the data updated in the database.
     * @param {ApplicantUpdateManyAndReturnArgs} args - Arguments to update many Applicants.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applicants and only return the `id`
     * const applicantWithIdOnly = await prisma.applicant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicantUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Applicant.
     * @param {ApplicantUpsertArgs} args - Arguments to update or create a Applicant.
     * @example
     * // Update or create a Applicant
     * const applicant = await prisma.applicant.upsert({
     *   create: {
     *     // ... data to create a Applicant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicant we want to update
     *   }
     * })
     */
    upsert<T extends ApplicantUpsertArgs>(args: SelectSubset<T, ApplicantUpsertArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicant.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
    **/
    count<T extends ApplicantCountArgs>(
      args?: Subset<T, ApplicantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicantAggregateArgs>(args: Subset<T, ApplicantAggregateArgs>): Prisma.PrismaPromise<GetApplicantAggregateType<T>>

    /**
     * Group by Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicantGroupByArgs['orderBy'] }
        : { orderBy?: ApplicantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Applicant model
   */
  readonly fields: ApplicantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Applicant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applications<T extends Applicant$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resumes<T extends Applicant$resumesArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coverLetter<T extends Applicant$coverLetterArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$coverLetterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assessments<T extends Applicant$assessmentsArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$assessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Applicant model
   */
  interface ApplicantFieldRefs {
    readonly id: FieldRef<"Applicant", 'Int'>
    readonly biography: FieldRef<"Applicant", 'String'>
    readonly dateOfBirth: FieldRef<"Applicant", 'DateTime'>
    readonly nationality: FieldRef<"Applicant", 'String'>
    readonly maritalStatus: FieldRef<"Applicant", 'MaritalStatus'>
    readonly gender: FieldRef<"Applicant", 'Gender'>
    readonly education: FieldRef<"Applicant", 'EducationLevel'>
    readonly experience: FieldRef<"Applicant", 'String'>
    readonly websiteUrl: FieldRef<"Applicant", 'String'>
    readonly location: FieldRef<"Applicant", 'String'>
    readonly deletedAt: FieldRef<"Applicant", 'DateTime'>
    readonly createdAt: FieldRef<"Applicant", 'DateTime'>
    readonly updatedAt: FieldRef<"Applicant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Applicant findUnique
   */
  export type ApplicantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant findUniqueOrThrow
   */
  export type ApplicantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant findFirst
   */
  export type ApplicantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[]
  }

  /**
   * Applicant findFirstOrThrow
   */
  export type ApplicantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[]
  }

  /**
   * Applicant findMany
   */
  export type ApplicantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicants to fetch.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applicants.
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[]
  }

  /**
   * Applicant create
   */
  export type ApplicantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * The data needed to create a Applicant.
     */
    data: XOR<ApplicantCreateInput, ApplicantUncheckedCreateInput>
  }

  /**
   * Applicant createMany
   */
  export type ApplicantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applicants.
     */
    data: ApplicantCreateManyInput | ApplicantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Applicant createManyAndReturn
   */
  export type ApplicantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * The data used to create many Applicants.
     */
    data: ApplicantCreateManyInput | ApplicantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Applicant update
   */
  export type ApplicantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * The data needed to update a Applicant.
     */
    data: XOR<ApplicantUpdateInput, ApplicantUncheckedUpdateInput>
    /**
     * Choose, which Applicant to update.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant updateMany
   */
  export type ApplicantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applicants.
     */
    data: XOR<ApplicantUpdateManyMutationInput, ApplicantUncheckedUpdateManyInput>
    /**
     * Filter which Applicants to update
     */
    where?: ApplicantWhereInput
    /**
     * Limit how many Applicants to update.
     */
    limit?: number
  }

  /**
   * Applicant updateManyAndReturn
   */
  export type ApplicantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * The data used to update Applicants.
     */
    data: XOR<ApplicantUpdateManyMutationInput, ApplicantUncheckedUpdateManyInput>
    /**
     * Filter which Applicants to update
     */
    where?: ApplicantWhereInput
    /**
     * Limit how many Applicants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Applicant upsert
   */
  export type ApplicantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * The filter to search for the Applicant to update in case it exists.
     */
    where: ApplicantWhereUniqueInput
    /**
     * In case the Applicant found by the `where` argument doesn't exist, create a new Applicant with this data.
     */
    create: XOR<ApplicantCreateInput, ApplicantUncheckedCreateInput>
    /**
     * In case the Applicant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicantUpdateInput, ApplicantUncheckedUpdateInput>
  }

  /**
   * Applicant delete
   */
  export type ApplicantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter which Applicant to delete.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant deleteMany
   */
  export type ApplicantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applicants to delete
     */
    where?: ApplicantWhereInput
    /**
     * Limit how many Applicants to delete.
     */
    limit?: number
  }

  /**
   * Applicant.applications
   */
  export type Applicant$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * Applicant.resumes
   */
  export type Applicant$resumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Applicant.coverLetter
   */
  export type Applicant$coverLetterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    where?: CoverLetterWhereInput
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    cursor?: CoverLetterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * Applicant.assessments
   */
  export type Applicant$assessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    cursor?: AssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Applicant without action
   */
  export type ApplicantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    id: number | null
    employerId: number | null
    minSalary: number | null
    maxSalary: number | null
  }

  export type JobSumAggregateOutputType = {
    id: number | null
    employerId: number | null
    minSalary: number | null
    maxSalary: number | null
  }

  export type JobMinAggregateOutputType = {
    id: number | null
    title: string | null
    employerId: number | null
    description: string | null
    tags: string | null
    minSalary: number | null
    maxSalary: number | null
    salaryCurrency: string | null
    salaryPeriod: string | null
    location: string | null
    jobType: string | null
    workType: string | null
    jobLevel: string | null
    experience: string | null
    minEducation: string | null
    isFeatured: boolean | null
    expiresAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: number | null
    title: string | null
    employerId: number | null
    description: string | null
    tags: string | null
    minSalary: number | null
    maxSalary: number | null
    salaryCurrency: string | null
    salaryPeriod: string | null
    location: string | null
    jobType: string | null
    workType: string | null
    jobLevel: string | null
    experience: string | null
    minEducation: string | null
    isFeatured: boolean | null
    expiresAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    title: number
    employerId: number
    description: number
    tags: number
    minSalary: number
    maxSalary: number
    salaryCurrency: number
    salaryPeriod: number
    location: number
    jobType: number
    workType: number
    jobLevel: number
    experience: number
    minEducation: number
    isFeatured: number
    expiresAt: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    id?: true
    employerId?: true
    minSalary?: true
    maxSalary?: true
  }

  export type JobSumAggregateInputType = {
    id?: true
    employerId?: true
    minSalary?: true
    maxSalary?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    employerId?: true
    description?: true
    tags?: true
    minSalary?: true
    maxSalary?: true
    salaryCurrency?: true
    salaryPeriod?: true
    location?: true
    jobType?: true
    workType?: true
    jobLevel?: true
    experience?: true
    minEducation?: true
    isFeatured?: true
    expiresAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    title?: true
    employerId?: true
    description?: true
    tags?: true
    minSalary?: true
    maxSalary?: true
    salaryCurrency?: true
    salaryPeriod?: true
    location?: true
    jobType?: true
    workType?: true
    jobLevel?: true
    experience?: true
    minEducation?: true
    isFeatured?: true
    expiresAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    title?: true
    employerId?: true
    description?: true
    tags?: true
    minSalary?: true
    maxSalary?: true
    salaryCurrency?: true
    salaryPeriod?: true
    location?: true
    jobType?: true
    workType?: true
    jobLevel?: true
    experience?: true
    minEducation?: true
    isFeatured?: true
    expiresAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: number
    title: string
    employerId: number
    description: string
    tags: string | null
    minSalary: number | null
    maxSalary: number | null
    salaryCurrency: string | null
    salaryPeriod: string | null
    location: string | null
    jobType: string | null
    workType: string | null
    jobLevel: string | null
    experience: string | null
    minEducation: string | null
    isFeatured: boolean
    expiresAt: Date | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    employerId?: boolean
    description?: boolean
    tags?: boolean
    minSalary?: boolean
    maxSalary?: boolean
    salaryCurrency?: boolean
    salaryPeriod?: boolean
    location?: boolean
    jobType?: boolean
    workType?: boolean
    jobLevel?: boolean
    experience?: boolean
    minEducation?: boolean
    isFeatured?: boolean
    expiresAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | EmployerDefaultArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    savedJobs?: boolean | Job$savedJobsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    employerId?: boolean
    description?: boolean
    tags?: boolean
    minSalary?: boolean
    maxSalary?: boolean
    salaryCurrency?: boolean
    salaryPeriod?: boolean
    location?: boolean
    jobType?: boolean
    workType?: boolean
    jobLevel?: boolean
    experience?: boolean
    minEducation?: boolean
    isFeatured?: boolean
    expiresAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | EmployerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    employerId?: boolean
    description?: boolean
    tags?: boolean
    minSalary?: boolean
    maxSalary?: boolean
    salaryCurrency?: boolean
    salaryPeriod?: boolean
    location?: boolean
    jobType?: boolean
    workType?: boolean
    jobLevel?: boolean
    experience?: boolean
    minEducation?: boolean
    isFeatured?: boolean
    expiresAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | EmployerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    title?: boolean
    employerId?: boolean
    description?: boolean
    tags?: boolean
    minSalary?: boolean
    maxSalary?: boolean
    salaryCurrency?: boolean
    salaryPeriod?: boolean
    location?: boolean
    jobType?: boolean
    workType?: boolean
    jobLevel?: boolean
    experience?: boolean
    minEducation?: boolean
    isFeatured?: boolean
    expiresAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "employerId" | "description" | "tags" | "minSalary" | "maxSalary" | "salaryCurrency" | "salaryPeriod" | "location" | "jobType" | "workType" | "jobLevel" | "experience" | "minEducation" | "isFeatured" | "expiresAt" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | EmployerDefaultArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    savedJobs?: boolean | Job$savedJobsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | EmployerDefaultArgs<ExtArgs>
  }
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | EmployerDefaultArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      employer: Prisma.$EmployerPayload<ExtArgs>
      applications: Prisma.$JobApplicationPayload<ExtArgs>[]
      savedJobs: Prisma.$SavedJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      employerId: number
      description: string
      tags: string | null
      minSalary: number | null
      maxSalary: number | null
      salaryCurrency: string | null
      salaryPeriod: string | null
      location: string | null
      jobType: string | null
      workType: string | null
      jobLevel: string | null
      experience: string | null
      minEducation: string | null
      isFeatured: boolean
      expiresAt: Date | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employer<T extends EmployerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployerDefaultArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applications<T extends Job$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Job$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedJobs<T extends Job$savedJobsArgs<ExtArgs> = {}>(args?: Subset<T, Job$savedJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'Int'>
    readonly title: FieldRef<"Job", 'String'>
    readonly employerId: FieldRef<"Job", 'Int'>
    readonly description: FieldRef<"Job", 'String'>
    readonly tags: FieldRef<"Job", 'String'>
    readonly minSalary: FieldRef<"Job", 'Int'>
    readonly maxSalary: FieldRef<"Job", 'Int'>
    readonly salaryCurrency: FieldRef<"Job", 'String'>
    readonly salaryPeriod: FieldRef<"Job", 'String'>
    readonly location: FieldRef<"Job", 'String'>
    readonly jobType: FieldRef<"Job", 'String'>
    readonly workType: FieldRef<"Job", 'String'>
    readonly jobLevel: FieldRef<"Job", 'String'>
    readonly experience: FieldRef<"Job", 'String'>
    readonly minEducation: FieldRef<"Job", 'String'>
    readonly isFeatured: FieldRef<"Job", 'Boolean'>
    readonly expiresAt: FieldRef<"Job", 'DateTime'>
    readonly deletedAt: FieldRef<"Job", 'DateTime'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.applications
   */
  export type Job$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * Job.savedJobs
   */
  export type Job$savedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobInclude<ExtArgs> | null
    where?: SavedJobWhereInput
    orderBy?: SavedJobOrderByWithRelationInput | SavedJobOrderByWithRelationInput[]
    cursor?: SavedJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedJobScalarFieldEnum | SavedJobScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model JobApplication
   */

  export type AggregateJobApplication = {
    _count: JobApplicationCountAggregateOutputType | null
    _avg: JobApplicationAvgAggregateOutputType | null
    _sum: JobApplicationSumAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  export type JobApplicationAvgAggregateOutputType = {
    id: number | null
    jobId: number | null
    applicantId: number | null
    resumeId: number | null
  }

  export type JobApplicationSumAggregateOutputType = {
    id: number | null
    jobId: number | null
    applicantId: number | null
    resumeId: number | null
  }

  export type JobApplicationMinAggregateOutputType = {
    id: number | null
    jobId: number | null
    applicantId: number | null
    resumeId: number | null
    coverLetter: string | null
    status: $Enums.ApplicationStatus | null
    appliedAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationMaxAggregateOutputType = {
    id: number | null
    jobId: number | null
    applicantId: number | null
    resumeId: number | null
    coverLetter: string | null
    status: $Enums.ApplicationStatus | null
    appliedAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationCountAggregateOutputType = {
    id: number
    jobId: number
    applicantId: number
    resumeId: number
    coverLetter: number
    status: number
    appliedAt: number
    updatedAt: number
    _all: number
  }


  export type JobApplicationAvgAggregateInputType = {
    id?: true
    jobId?: true
    applicantId?: true
    resumeId?: true
  }

  export type JobApplicationSumAggregateInputType = {
    id?: true
    jobId?: true
    applicantId?: true
    resumeId?: true
  }

  export type JobApplicationMinAggregateInputType = {
    id?: true
    jobId?: true
    applicantId?: true
    resumeId?: true
    coverLetter?: true
    status?: true
    appliedAt?: true
    updatedAt?: true
  }

  export type JobApplicationMaxAggregateInputType = {
    id?: true
    jobId?: true
    applicantId?: true
    resumeId?: true
    coverLetter?: true
    status?: true
    appliedAt?: true
    updatedAt?: true
  }

  export type JobApplicationCountAggregateInputType = {
    id?: true
    jobId?: true
    applicantId?: true
    resumeId?: true
    coverLetter?: true
    status?: true
    appliedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplication to aggregate.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobApplications
    **/
    _count?: true | JobApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobApplicationMaxAggregateInputType
  }

  export type GetJobApplicationAggregateType<T extends JobApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateJobApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobApplication[P]>
      : GetScalarType<T[P], AggregateJobApplication[P]>
  }




  export type JobApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithAggregationInput | JobApplicationOrderByWithAggregationInput[]
    by: JobApplicationScalarFieldEnum[] | JobApplicationScalarFieldEnum
    having?: JobApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobApplicationCountAggregateInputType | true
    _avg?: JobApplicationAvgAggregateInputType
    _sum?: JobApplicationSumAggregateInputType
    _min?: JobApplicationMinAggregateInputType
    _max?: JobApplicationMaxAggregateInputType
  }

  export type JobApplicationGroupByOutputType = {
    id: number
    jobId: number
    applicantId: number
    resumeId: number
    coverLetter: string | null
    status: $Enums.ApplicationStatus
    appliedAt: Date
    updatedAt: Date
    _count: JobApplicationCountAggregateOutputType | null
    _avg: JobApplicationAvgAggregateOutputType | null
    _sum: JobApplicationSumAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  type GetJobApplicationGroupByPayload<T extends JobApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
        }
      >
    >


  export type JobApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    applicantId?: boolean
    resumeId?: boolean
    coverLetter?: boolean
    status?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    applicantId?: boolean
    resumeId?: boolean
    coverLetter?: boolean
    status?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    applicantId?: boolean
    resumeId?: boolean
    coverLetter?: boolean
    status?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectScalar = {
    id?: boolean
    jobId?: boolean
    applicantId?: boolean
    resumeId?: boolean
    coverLetter?: boolean
    status?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
  }

  export type JobApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "applicantId" | "resumeId" | "coverLetter" | "status" | "appliedAt" | "updatedAt", ExtArgs["result"]["jobApplication"]>
  export type JobApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type JobApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type JobApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $JobApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobApplication"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs>
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobId: number
      applicantId: number
      resumeId: number
      coverLetter: string | null
      status: $Enums.ApplicationStatus
      appliedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobApplication"]>
    composites: {}
  }

  type JobApplicationGetPayload<S extends boolean | null | undefined | JobApplicationDefaultArgs> = $Result.GetResult<Prisma.$JobApplicationPayload, S>

  type JobApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobApplicationCountAggregateInputType | true
    }

  export interface JobApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobApplication'], meta: { name: 'JobApplication' } }
    /**
     * Find zero or one JobApplication that matches the filter.
     * @param {JobApplicationFindUniqueArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobApplicationFindUniqueArgs>(args: SelectSubset<T, JobApplicationFindUniqueArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobApplicationFindUniqueOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, JobApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobApplicationFindFirstArgs>(args?: SelectSubset<T, JobApplicationFindFirstArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, JobApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobApplications
     * const jobApplications = await prisma.jobApplication.findMany()
     * 
     * // Get first 10 JobApplications
     * const jobApplications = await prisma.jobApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobApplicationFindManyArgs>(args?: SelectSubset<T, JobApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobApplication.
     * @param {JobApplicationCreateArgs} args - Arguments to create a JobApplication.
     * @example
     * // Create one JobApplication
     * const JobApplication = await prisma.jobApplication.create({
     *   data: {
     *     // ... data to create a JobApplication
     *   }
     * })
     * 
     */
    create<T extends JobApplicationCreateArgs>(args: SelectSubset<T, JobApplicationCreateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobApplications.
     * @param {JobApplicationCreateManyArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobApplicationCreateManyArgs>(args?: SelectSubset<T, JobApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobApplications and returns the data saved in the database.
     * @param {JobApplicationCreateManyAndReturnArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, JobApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobApplication.
     * @param {JobApplicationDeleteArgs} args - Arguments to delete one JobApplication.
     * @example
     * // Delete one JobApplication
     * const JobApplication = await prisma.jobApplication.delete({
     *   where: {
     *     // ... filter to delete one JobApplication
     *   }
     * })
     * 
     */
    delete<T extends JobApplicationDeleteArgs>(args: SelectSubset<T, JobApplicationDeleteArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobApplication.
     * @param {JobApplicationUpdateArgs} args - Arguments to update one JobApplication.
     * @example
     * // Update one JobApplication
     * const jobApplication = await prisma.jobApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobApplicationUpdateArgs>(args: SelectSubset<T, JobApplicationUpdateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobApplications.
     * @param {JobApplicationDeleteManyArgs} args - Arguments to filter JobApplications to delete.
     * @example
     * // Delete a few JobApplications
     * const { count } = await prisma.jobApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobApplicationDeleteManyArgs>(args?: SelectSubset<T, JobApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobApplicationUpdateManyArgs>(args: SelectSubset<T, JobApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications and returns the data updated in the database.
     * @param {JobApplicationUpdateManyAndReturnArgs} args - Arguments to update many JobApplications.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, JobApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobApplication.
     * @param {JobApplicationUpsertArgs} args - Arguments to update or create a JobApplication.
     * @example
     * // Update or create a JobApplication
     * const jobApplication = await prisma.jobApplication.upsert({
     *   create: {
     *     // ... data to create a JobApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobApplication we want to update
     *   }
     * })
     */
    upsert<T extends JobApplicationUpsertArgs>(args: SelectSubset<T, JobApplicationUpsertArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationCountArgs} args - Arguments to filter JobApplications to count.
     * @example
     * // Count the number of JobApplications
     * const count = await prisma.jobApplication.count({
     *   where: {
     *     // ... the filter for the JobApplications we want to count
     *   }
     * })
    **/
    count<T extends JobApplicationCountArgs>(
      args?: Subset<T, JobApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobApplicationAggregateArgs>(args: Subset<T, JobApplicationAggregateArgs>): Prisma.PrismaPromise<GetJobApplicationAggregateType<T>>

    /**
     * Group by JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobApplicationGroupByArgs['orderBy'] }
        : { orderBy?: JobApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobApplication model
   */
  readonly fields: JobApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ApplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantDefaultArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobApplication model
   */
  interface JobApplicationFieldRefs {
    readonly id: FieldRef<"JobApplication", 'Int'>
    readonly jobId: FieldRef<"JobApplication", 'Int'>
    readonly applicantId: FieldRef<"JobApplication", 'Int'>
    readonly resumeId: FieldRef<"JobApplication", 'Int'>
    readonly coverLetter: FieldRef<"JobApplication", 'String'>
    readonly status: FieldRef<"JobApplication", 'ApplicationStatus'>
    readonly appliedAt: FieldRef<"JobApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"JobApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobApplication findUnique
   */
  export type JobApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findUniqueOrThrow
   */
  export type JobApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findFirst
   */
  export type JobApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findFirstOrThrow
   */
  export type JobApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findMany
   */
  export type JobApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication create
   */
  export type JobApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a JobApplication.
     */
    data: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
  }

  /**
   * JobApplication createMany
   */
  export type JobApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobApplication createManyAndReturn
   */
  export type JobApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplication update
   */
  export type JobApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a JobApplication.
     */
    data: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
    /**
     * Choose, which JobApplication to update.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication updateMany
   */
  export type JobApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
  }

  /**
   * JobApplication updateManyAndReturn
   */
  export type JobApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplication upsert
   */
  export type JobApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the JobApplication to update in case it exists.
     */
    where: JobApplicationWhereUniqueInput
    /**
     * In case the JobApplication found by the `where` argument doesn't exist, create a new JobApplication with this data.
     */
    create: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
    /**
     * In case the JobApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
  }

  /**
   * JobApplication delete
   */
  export type JobApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter which JobApplication to delete.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication deleteMany
   */
  export type JobApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplications to delete
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to delete.
     */
    limit?: number
  }

  /**
   * JobApplication without action
   */
  export type JobApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
  }


  /**
   * Model SavedJob
   */

  export type AggregateSavedJob = {
    _count: SavedJobCountAggregateOutputType | null
    _avg: SavedJobAvgAggregateOutputType | null
    _sum: SavedJobSumAggregateOutputType | null
    _min: SavedJobMinAggregateOutputType | null
    _max: SavedJobMaxAggregateOutputType | null
  }

  export type SavedJobAvgAggregateOutputType = {
    id: number | null
    jobId: number | null
    userId: number | null
  }

  export type SavedJobSumAggregateOutputType = {
    id: number | null
    jobId: number | null
    userId: number | null
  }

  export type SavedJobMinAggregateOutputType = {
    id: number | null
    jobId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavedJobMaxAggregateOutputType = {
    id: number | null
    jobId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavedJobCountAggregateOutputType = {
    id: number
    jobId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SavedJobAvgAggregateInputType = {
    id?: true
    jobId?: true
    userId?: true
  }

  export type SavedJobSumAggregateInputType = {
    id?: true
    jobId?: true
    userId?: true
  }

  export type SavedJobMinAggregateInputType = {
    id?: true
    jobId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavedJobMaxAggregateInputType = {
    id?: true
    jobId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavedJobCountAggregateInputType = {
    id?: true
    jobId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SavedJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedJob to aggregate.
     */
    where?: SavedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedJobs to fetch.
     */
    orderBy?: SavedJobOrderByWithRelationInput | SavedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedJobs
    **/
    _count?: true | SavedJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedJobMaxAggregateInputType
  }

  export type GetSavedJobAggregateType<T extends SavedJobAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedJob[P]>
      : GetScalarType<T[P], AggregateSavedJob[P]>
  }




  export type SavedJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedJobWhereInput
    orderBy?: SavedJobOrderByWithAggregationInput | SavedJobOrderByWithAggregationInput[]
    by: SavedJobScalarFieldEnum[] | SavedJobScalarFieldEnum
    having?: SavedJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedJobCountAggregateInputType | true
    _avg?: SavedJobAvgAggregateInputType
    _sum?: SavedJobSumAggregateInputType
    _min?: SavedJobMinAggregateInputType
    _max?: SavedJobMaxAggregateInputType
  }

  export type SavedJobGroupByOutputType = {
    id: number
    jobId: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: SavedJobCountAggregateOutputType | null
    _avg: SavedJobAvgAggregateOutputType | null
    _sum: SavedJobSumAggregateOutputType | null
    _min: SavedJobMinAggregateOutputType | null
    _max: SavedJobMaxAggregateOutputType | null
  }

  type GetSavedJobGroupByPayload<T extends SavedJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedJobGroupByOutputType[P]>
            : GetScalarType<T[P], SavedJobGroupByOutputType[P]>
        }
      >
    >


  export type SavedJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedJob"]>

  export type SavedJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedJob"]>

  export type SavedJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedJob"]>

  export type SavedJobSelectScalar = {
    id?: boolean
    jobId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SavedJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["savedJob"]>
  export type SavedJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavedJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedJob"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobId: number
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["savedJob"]>
    composites: {}
  }

  type SavedJobGetPayload<S extends boolean | null | undefined | SavedJobDefaultArgs> = $Result.GetResult<Prisma.$SavedJobPayload, S>

  type SavedJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedJobCountAggregateInputType | true
    }

  export interface SavedJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedJob'], meta: { name: 'SavedJob' } }
    /**
     * Find zero or one SavedJob that matches the filter.
     * @param {SavedJobFindUniqueArgs} args - Arguments to find a SavedJob
     * @example
     * // Get one SavedJob
     * const savedJob = await prisma.savedJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedJobFindUniqueArgs>(args: SelectSubset<T, SavedJobFindUniqueArgs<ExtArgs>>): Prisma__SavedJobClient<$Result.GetResult<Prisma.$SavedJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedJobFindUniqueOrThrowArgs} args - Arguments to find a SavedJob
     * @example
     * // Get one SavedJob
     * const savedJob = await prisma.savedJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedJobFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedJobClient<$Result.GetResult<Prisma.$SavedJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobFindFirstArgs} args - Arguments to find a SavedJob
     * @example
     * // Get one SavedJob
     * const savedJob = await prisma.savedJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedJobFindFirstArgs>(args?: SelectSubset<T, SavedJobFindFirstArgs<ExtArgs>>): Prisma__SavedJobClient<$Result.GetResult<Prisma.$SavedJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobFindFirstOrThrowArgs} args - Arguments to find a SavedJob
     * @example
     * // Get one SavedJob
     * const savedJob = await prisma.savedJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedJobFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedJobClient<$Result.GetResult<Prisma.$SavedJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedJobs
     * const savedJobs = await prisma.savedJob.findMany()
     * 
     * // Get first 10 SavedJobs
     * const savedJobs = await prisma.savedJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedJobWithIdOnly = await prisma.savedJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedJobFindManyArgs>(args?: SelectSubset<T, SavedJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedJob.
     * @param {SavedJobCreateArgs} args - Arguments to create a SavedJob.
     * @example
     * // Create one SavedJob
     * const SavedJob = await prisma.savedJob.create({
     *   data: {
     *     // ... data to create a SavedJob
     *   }
     * })
     * 
     */
    create<T extends SavedJobCreateArgs>(args: SelectSubset<T, SavedJobCreateArgs<ExtArgs>>): Prisma__SavedJobClient<$Result.GetResult<Prisma.$SavedJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedJobs.
     * @param {SavedJobCreateManyArgs} args - Arguments to create many SavedJobs.
     * @example
     * // Create many SavedJobs
     * const savedJob = await prisma.savedJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedJobCreateManyArgs>(args?: SelectSubset<T, SavedJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedJobs and returns the data saved in the database.
     * @param {SavedJobCreateManyAndReturnArgs} args - Arguments to create many SavedJobs.
     * @example
     * // Create many SavedJobs
     * const savedJob = await prisma.savedJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedJobs and only return the `id`
     * const savedJobWithIdOnly = await prisma.savedJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedJobCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedJob.
     * @param {SavedJobDeleteArgs} args - Arguments to delete one SavedJob.
     * @example
     * // Delete one SavedJob
     * const SavedJob = await prisma.savedJob.delete({
     *   where: {
     *     // ... filter to delete one SavedJob
     *   }
     * })
     * 
     */
    delete<T extends SavedJobDeleteArgs>(args: SelectSubset<T, SavedJobDeleteArgs<ExtArgs>>): Prisma__SavedJobClient<$Result.GetResult<Prisma.$SavedJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedJob.
     * @param {SavedJobUpdateArgs} args - Arguments to update one SavedJob.
     * @example
     * // Update one SavedJob
     * const savedJob = await prisma.savedJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedJobUpdateArgs>(args: SelectSubset<T, SavedJobUpdateArgs<ExtArgs>>): Prisma__SavedJobClient<$Result.GetResult<Prisma.$SavedJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedJobs.
     * @param {SavedJobDeleteManyArgs} args - Arguments to filter SavedJobs to delete.
     * @example
     * // Delete a few SavedJobs
     * const { count } = await prisma.savedJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedJobDeleteManyArgs>(args?: SelectSubset<T, SavedJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedJobs
     * const savedJob = await prisma.savedJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedJobUpdateManyArgs>(args: SelectSubset<T, SavedJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedJobs and returns the data updated in the database.
     * @param {SavedJobUpdateManyAndReturnArgs} args - Arguments to update many SavedJobs.
     * @example
     * // Update many SavedJobs
     * const savedJob = await prisma.savedJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedJobs and only return the `id`
     * const savedJobWithIdOnly = await prisma.savedJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedJobUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedJob.
     * @param {SavedJobUpsertArgs} args - Arguments to update or create a SavedJob.
     * @example
     * // Update or create a SavedJob
     * const savedJob = await prisma.savedJob.upsert({
     *   create: {
     *     // ... data to create a SavedJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedJob we want to update
     *   }
     * })
     */
    upsert<T extends SavedJobUpsertArgs>(args: SelectSubset<T, SavedJobUpsertArgs<ExtArgs>>): Prisma__SavedJobClient<$Result.GetResult<Prisma.$SavedJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobCountArgs} args - Arguments to filter SavedJobs to count.
     * @example
     * // Count the number of SavedJobs
     * const count = await prisma.savedJob.count({
     *   where: {
     *     // ... the filter for the SavedJobs we want to count
     *   }
     * })
    **/
    count<T extends SavedJobCountArgs>(
      args?: Subset<T, SavedJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedJobAggregateArgs>(args: Subset<T, SavedJobAggregateArgs>): Prisma.PrismaPromise<GetSavedJobAggregateType<T>>

    /**
     * Group by SavedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedJobGroupByArgs['orderBy'] }
        : { orderBy?: SavedJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedJob model
   */
  readonly fields: SavedJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedJob model
   */
  interface SavedJobFieldRefs {
    readonly id: FieldRef<"SavedJob", 'Int'>
    readonly jobId: FieldRef<"SavedJob", 'Int'>
    readonly userId: FieldRef<"SavedJob", 'Int'>
    readonly createdAt: FieldRef<"SavedJob", 'DateTime'>
    readonly updatedAt: FieldRef<"SavedJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedJob findUnique
   */
  export type SavedJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * Filter, which SavedJob to fetch.
     */
    where: SavedJobWhereUniqueInput
  }

  /**
   * SavedJob findUniqueOrThrow
   */
  export type SavedJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * Filter, which SavedJob to fetch.
     */
    where: SavedJobWhereUniqueInput
  }

  /**
   * SavedJob findFirst
   */
  export type SavedJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * Filter, which SavedJob to fetch.
     */
    where?: SavedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedJobs to fetch.
     */
    orderBy?: SavedJobOrderByWithRelationInput | SavedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedJobs.
     */
    cursor?: SavedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedJobs.
     */
    distinct?: SavedJobScalarFieldEnum | SavedJobScalarFieldEnum[]
  }

  /**
   * SavedJob findFirstOrThrow
   */
  export type SavedJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * Filter, which SavedJob to fetch.
     */
    where?: SavedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedJobs to fetch.
     */
    orderBy?: SavedJobOrderByWithRelationInput | SavedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedJobs.
     */
    cursor?: SavedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedJobs.
     */
    distinct?: SavedJobScalarFieldEnum | SavedJobScalarFieldEnum[]
  }

  /**
   * SavedJob findMany
   */
  export type SavedJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * Filter, which SavedJobs to fetch.
     */
    where?: SavedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedJobs to fetch.
     */
    orderBy?: SavedJobOrderByWithRelationInput | SavedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedJobs.
     */
    cursor?: SavedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedJobs.
     */
    skip?: number
    distinct?: SavedJobScalarFieldEnum | SavedJobScalarFieldEnum[]
  }

  /**
   * SavedJob create
   */
  export type SavedJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedJob.
     */
    data: XOR<SavedJobCreateInput, SavedJobUncheckedCreateInput>
  }

  /**
   * SavedJob createMany
   */
  export type SavedJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedJobs.
     */
    data: SavedJobCreateManyInput | SavedJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedJob createManyAndReturn
   */
  export type SavedJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * The data used to create many SavedJobs.
     */
    data: SavedJobCreateManyInput | SavedJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedJob update
   */
  export type SavedJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedJob.
     */
    data: XOR<SavedJobUpdateInput, SavedJobUncheckedUpdateInput>
    /**
     * Choose, which SavedJob to update.
     */
    where: SavedJobWhereUniqueInput
  }

  /**
   * SavedJob updateMany
   */
  export type SavedJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedJobs.
     */
    data: XOR<SavedJobUpdateManyMutationInput, SavedJobUncheckedUpdateManyInput>
    /**
     * Filter which SavedJobs to update
     */
    where?: SavedJobWhereInput
    /**
     * Limit how many SavedJobs to update.
     */
    limit?: number
  }

  /**
   * SavedJob updateManyAndReturn
   */
  export type SavedJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * The data used to update SavedJobs.
     */
    data: XOR<SavedJobUpdateManyMutationInput, SavedJobUncheckedUpdateManyInput>
    /**
     * Filter which SavedJobs to update
     */
    where?: SavedJobWhereInput
    /**
     * Limit how many SavedJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedJob upsert
   */
  export type SavedJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedJob to update in case it exists.
     */
    where: SavedJobWhereUniqueInput
    /**
     * In case the SavedJob found by the `where` argument doesn't exist, create a new SavedJob with this data.
     */
    create: XOR<SavedJobCreateInput, SavedJobUncheckedCreateInput>
    /**
     * In case the SavedJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedJobUpdateInput, SavedJobUncheckedUpdateInput>
  }

  /**
   * SavedJob delete
   */
  export type SavedJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobInclude<ExtArgs> | null
    /**
     * Filter which SavedJob to delete.
     */
    where: SavedJobWhereUniqueInput
  }

  /**
   * SavedJob deleteMany
   */
  export type SavedJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedJobs to delete
     */
    where?: SavedJobWhereInput
    /**
     * Limit how many SavedJobs to delete.
     */
    limit?: number
  }

  /**
   * SavedJob without action
   */
  export type SavedJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedJob
     */
    select?: SavedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedJob
     */
    omit?: SavedJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedJobInclude<ExtArgs> | null
  }


  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeAvgAggregateOutputType = {
    id: number | null
    applicantId: number | null
    fileSize: number | null
  }

  export type ResumeSumAggregateOutputType = {
    id: number | null
    applicantId: number | null
    fileSize: number | null
  }

  export type ResumeMinAggregateOutputType = {
    id: number | null
    applicantId: number | null
    fileUrl: string | null
    fileName: string | null
    fileSize: number | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: number | null
    applicantId: number | null
    fileUrl: string | null
    fileName: string | null
    fileSize: number | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    applicantId: number
    fileUrl: number
    fileName: number
    fileSize: number
    isPrimary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeAvgAggregateInputType = {
    id?: true
    applicantId?: true
    fileSize?: true
  }

  export type ResumeSumAggregateInputType = {
    id?: true
    applicantId?: true
    fileSize?: true
  }

  export type ResumeMinAggregateInputType = {
    id?: true
    applicantId?: true
    fileUrl?: true
    fileName?: true
    fileSize?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    applicantId?: true
    fileUrl?: true
    fileName?: true
    fileSize?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    applicantId?: true
    fileUrl?: true
    fileName?: true
    fileSize?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _avg?: ResumeAvgAggregateInputType
    _sum?: ResumeSumAggregateInputType
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: number
    applicantId: number
    fileUrl: string
    fileName: string
    fileSize: number | null
    isPrimary: boolean
    createdAt: Date
    updatedAt: Date
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applications?: boolean | Resume$applicationsArgs<ExtArgs>
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    applicantId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicantId" | "fileUrl" | "fileName" | "fileSize" | "isPrimary" | "createdAt" | "updatedAt", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | Resume$applicationsArgs<ExtArgs>
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      applications: Prisma.$JobApplicationPayload<ExtArgs>[]
      applicant: Prisma.$ApplicantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicantId: number
      fileUrl: string
      fileName: string
      fileSize: number | null
      isPrimary: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends Resume$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applicant<T extends ApplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantDefaultArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'Int'>
    readonly applicantId: FieldRef<"Resume", 'Int'>
    readonly fileUrl: FieldRef<"Resume", 'String'>
    readonly fileName: FieldRef<"Resume", 'String'>
    readonly fileSize: FieldRef<"Resume", 'Int'>
    readonly isPrimary: FieldRef<"Resume", 'Boolean'>
    readonly createdAt: FieldRef<"Resume", 'DateTime'>
    readonly updatedAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume.applications
   */
  export type Resume$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model CoverLetter
   */

  export type AggregateCoverLetter = {
    _count: CoverLetterCountAggregateOutputType | null
    _avg: CoverLetterAvgAggregateOutputType | null
    _sum: CoverLetterSumAggregateOutputType | null
    _min: CoverLetterMinAggregateOutputType | null
    _max: CoverLetterMaxAggregateOutputType | null
  }

  export type CoverLetterAvgAggregateOutputType = {
    id: number | null
    applicantId: number | null
  }

  export type CoverLetterSumAggregateOutputType = {
    id: number | null
    applicantId: number | null
  }

  export type CoverLetterMinAggregateOutputType = {
    id: number | null
    applicantId: number | null
    content: string | null
    jobDescription: string | null
    companyName: string | null
    jobTitle: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoverLetterMaxAggregateOutputType = {
    id: number | null
    applicantId: number | null
    content: string | null
    jobDescription: string | null
    companyName: string | null
    jobTitle: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoverLetterCountAggregateOutputType = {
    id: number
    applicantId: number
    content: number
    jobDescription: number
    companyName: number
    jobTitle: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoverLetterAvgAggregateInputType = {
    id?: true
    applicantId?: true
  }

  export type CoverLetterSumAggregateInputType = {
    id?: true
    applicantId?: true
  }

  export type CoverLetterMinAggregateInputType = {
    id?: true
    applicantId?: true
    content?: true
    jobDescription?: true
    companyName?: true
    jobTitle?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoverLetterMaxAggregateInputType = {
    id?: true
    applicantId?: true
    content?: true
    jobDescription?: true
    companyName?: true
    jobTitle?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoverLetterCountAggregateInputType = {
    id?: true
    applicantId?: true
    content?: true
    jobDescription?: true
    companyName?: true
    jobTitle?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoverLetterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverLetter to aggregate.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoverLetters
    **/
    _count?: true | CoverLetterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoverLetterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoverLetterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoverLetterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoverLetterMaxAggregateInputType
  }

  export type GetCoverLetterAggregateType<T extends CoverLetterAggregateArgs> = {
        [P in keyof T & keyof AggregateCoverLetter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoverLetter[P]>
      : GetScalarType<T[P], AggregateCoverLetter[P]>
  }




  export type CoverLetterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverLetterWhereInput
    orderBy?: CoverLetterOrderByWithAggregationInput | CoverLetterOrderByWithAggregationInput[]
    by: CoverLetterScalarFieldEnum[] | CoverLetterScalarFieldEnum
    having?: CoverLetterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoverLetterCountAggregateInputType | true
    _avg?: CoverLetterAvgAggregateInputType
    _sum?: CoverLetterSumAggregateInputType
    _min?: CoverLetterMinAggregateInputType
    _max?: CoverLetterMaxAggregateInputType
  }

  export type CoverLetterGroupByOutputType = {
    id: number
    applicantId: number
    content: string
    jobDescription: string | null
    companyName: string
    jobTitle: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: CoverLetterCountAggregateOutputType | null
    _avg: CoverLetterAvgAggregateOutputType | null
    _sum: CoverLetterSumAggregateOutputType | null
    _min: CoverLetterMinAggregateOutputType | null
    _max: CoverLetterMaxAggregateOutputType | null
  }

  type GetCoverLetterGroupByPayload<T extends CoverLetterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoverLetterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoverLetterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoverLetterGroupByOutputType[P]>
            : GetScalarType<T[P], CoverLetterGroupByOutputType[P]>
        }
      >
    >


  export type CoverLetterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    content?: boolean
    jobDescription?: boolean
    companyName?: boolean
    jobTitle?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverLetter"]>

  export type CoverLetterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    content?: boolean
    jobDescription?: boolean
    companyName?: boolean
    jobTitle?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverLetter"]>

  export type CoverLetterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    content?: boolean
    jobDescription?: boolean
    companyName?: boolean
    jobTitle?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverLetter"]>

  export type CoverLetterSelectScalar = {
    id?: boolean
    applicantId?: boolean
    content?: boolean
    jobDescription?: boolean
    companyName?: boolean
    jobTitle?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoverLetterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicantId" | "content" | "jobDescription" | "companyName" | "jobTitle" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["coverLetter"]>
  export type CoverLetterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }
  export type CoverLetterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }
  export type CoverLetterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }

  export type $CoverLetterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoverLetter"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicantId: number
      content: string
      jobDescription: string | null
      companyName: string
      jobTitle: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coverLetter"]>
    composites: {}
  }

  type CoverLetterGetPayload<S extends boolean | null | undefined | CoverLetterDefaultArgs> = $Result.GetResult<Prisma.$CoverLetterPayload, S>

  type CoverLetterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoverLetterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoverLetterCountAggregateInputType | true
    }

  export interface CoverLetterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoverLetter'], meta: { name: 'CoverLetter' } }
    /**
     * Find zero or one CoverLetter that matches the filter.
     * @param {CoverLetterFindUniqueArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoverLetterFindUniqueArgs>(args: SelectSubset<T, CoverLetterFindUniqueArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoverLetter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoverLetterFindUniqueOrThrowArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoverLetterFindUniqueOrThrowArgs>(args: SelectSubset<T, CoverLetterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverLetter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterFindFirstArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoverLetterFindFirstArgs>(args?: SelectSubset<T, CoverLetterFindFirstArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverLetter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterFindFirstOrThrowArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoverLetterFindFirstOrThrowArgs>(args?: SelectSubset<T, CoverLetterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoverLetters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoverLetters
     * const coverLetters = await prisma.coverLetter.findMany()
     * 
     * // Get first 10 CoverLetters
     * const coverLetters = await prisma.coverLetter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coverLetterWithIdOnly = await prisma.coverLetter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoverLetterFindManyArgs>(args?: SelectSubset<T, CoverLetterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoverLetter.
     * @param {CoverLetterCreateArgs} args - Arguments to create a CoverLetter.
     * @example
     * // Create one CoverLetter
     * const CoverLetter = await prisma.coverLetter.create({
     *   data: {
     *     // ... data to create a CoverLetter
     *   }
     * })
     * 
     */
    create<T extends CoverLetterCreateArgs>(args: SelectSubset<T, CoverLetterCreateArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoverLetters.
     * @param {CoverLetterCreateManyArgs} args - Arguments to create many CoverLetters.
     * @example
     * // Create many CoverLetters
     * const coverLetter = await prisma.coverLetter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoverLetterCreateManyArgs>(args?: SelectSubset<T, CoverLetterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoverLetters and returns the data saved in the database.
     * @param {CoverLetterCreateManyAndReturnArgs} args - Arguments to create many CoverLetters.
     * @example
     * // Create many CoverLetters
     * const coverLetter = await prisma.coverLetter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoverLetters and only return the `id`
     * const coverLetterWithIdOnly = await prisma.coverLetter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoverLetterCreateManyAndReturnArgs>(args?: SelectSubset<T, CoverLetterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoverLetter.
     * @param {CoverLetterDeleteArgs} args - Arguments to delete one CoverLetter.
     * @example
     * // Delete one CoverLetter
     * const CoverLetter = await prisma.coverLetter.delete({
     *   where: {
     *     // ... filter to delete one CoverLetter
     *   }
     * })
     * 
     */
    delete<T extends CoverLetterDeleteArgs>(args: SelectSubset<T, CoverLetterDeleteArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoverLetter.
     * @param {CoverLetterUpdateArgs} args - Arguments to update one CoverLetter.
     * @example
     * // Update one CoverLetter
     * const coverLetter = await prisma.coverLetter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoverLetterUpdateArgs>(args: SelectSubset<T, CoverLetterUpdateArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoverLetters.
     * @param {CoverLetterDeleteManyArgs} args - Arguments to filter CoverLetters to delete.
     * @example
     * // Delete a few CoverLetters
     * const { count } = await prisma.coverLetter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoverLetterDeleteManyArgs>(args?: SelectSubset<T, CoverLetterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoverLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoverLetters
     * const coverLetter = await prisma.coverLetter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoverLetterUpdateManyArgs>(args: SelectSubset<T, CoverLetterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoverLetters and returns the data updated in the database.
     * @param {CoverLetterUpdateManyAndReturnArgs} args - Arguments to update many CoverLetters.
     * @example
     * // Update many CoverLetters
     * const coverLetter = await prisma.coverLetter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoverLetters and only return the `id`
     * const coverLetterWithIdOnly = await prisma.coverLetter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoverLetterUpdateManyAndReturnArgs>(args: SelectSubset<T, CoverLetterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoverLetter.
     * @param {CoverLetterUpsertArgs} args - Arguments to update or create a CoverLetter.
     * @example
     * // Update or create a CoverLetter
     * const coverLetter = await prisma.coverLetter.upsert({
     *   create: {
     *     // ... data to create a CoverLetter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoverLetter we want to update
     *   }
     * })
     */
    upsert<T extends CoverLetterUpsertArgs>(args: SelectSubset<T, CoverLetterUpsertArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoverLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterCountArgs} args - Arguments to filter CoverLetters to count.
     * @example
     * // Count the number of CoverLetters
     * const count = await prisma.coverLetter.count({
     *   where: {
     *     // ... the filter for the CoverLetters we want to count
     *   }
     * })
    **/
    count<T extends CoverLetterCountArgs>(
      args?: Subset<T, CoverLetterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoverLetterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoverLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoverLetterAggregateArgs>(args: Subset<T, CoverLetterAggregateArgs>): Prisma.PrismaPromise<GetCoverLetterAggregateType<T>>

    /**
     * Group by CoverLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoverLetterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoverLetterGroupByArgs['orderBy'] }
        : { orderBy?: CoverLetterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoverLetterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoverLetterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoverLetter model
   */
  readonly fields: CoverLetterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoverLetter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoverLetterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ApplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantDefaultArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoverLetter model
   */
  interface CoverLetterFieldRefs {
    readonly id: FieldRef<"CoverLetter", 'Int'>
    readonly applicantId: FieldRef<"CoverLetter", 'Int'>
    readonly content: FieldRef<"CoverLetter", 'String'>
    readonly jobDescription: FieldRef<"CoverLetter", 'String'>
    readonly companyName: FieldRef<"CoverLetter", 'String'>
    readonly jobTitle: FieldRef<"CoverLetter", 'String'>
    readonly status: FieldRef<"CoverLetter", 'String'>
    readonly createdAt: FieldRef<"CoverLetter", 'DateTime'>
    readonly updatedAt: FieldRef<"CoverLetter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoverLetter findUnique
   */
  export type CoverLetterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter findUniqueOrThrow
   */
  export type CoverLetterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter findFirst
   */
  export type CoverLetterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverLetters.
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverLetters.
     */
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * CoverLetter findFirstOrThrow
   */
  export type CoverLetterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverLetters.
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverLetters.
     */
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * CoverLetter findMany
   */
  export type CoverLetterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetters to fetch.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoverLetters.
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * CoverLetter create
   */
  export type CoverLetterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * The data needed to create a CoverLetter.
     */
    data: XOR<CoverLetterCreateInput, CoverLetterUncheckedCreateInput>
  }

  /**
   * CoverLetter createMany
   */
  export type CoverLetterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoverLetters.
     */
    data: CoverLetterCreateManyInput | CoverLetterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoverLetter createManyAndReturn
   */
  export type CoverLetterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * The data used to create many CoverLetters.
     */
    data: CoverLetterCreateManyInput | CoverLetterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoverLetter update
   */
  export type CoverLetterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * The data needed to update a CoverLetter.
     */
    data: XOR<CoverLetterUpdateInput, CoverLetterUncheckedUpdateInput>
    /**
     * Choose, which CoverLetter to update.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter updateMany
   */
  export type CoverLetterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoverLetters.
     */
    data: XOR<CoverLetterUpdateManyMutationInput, CoverLetterUncheckedUpdateManyInput>
    /**
     * Filter which CoverLetters to update
     */
    where?: CoverLetterWhereInput
    /**
     * Limit how many CoverLetters to update.
     */
    limit?: number
  }

  /**
   * CoverLetter updateManyAndReturn
   */
  export type CoverLetterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * The data used to update CoverLetters.
     */
    data: XOR<CoverLetterUpdateManyMutationInput, CoverLetterUncheckedUpdateManyInput>
    /**
     * Filter which CoverLetters to update
     */
    where?: CoverLetterWhereInput
    /**
     * Limit how many CoverLetters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoverLetter upsert
   */
  export type CoverLetterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * The filter to search for the CoverLetter to update in case it exists.
     */
    where: CoverLetterWhereUniqueInput
    /**
     * In case the CoverLetter found by the `where` argument doesn't exist, create a new CoverLetter with this data.
     */
    create: XOR<CoverLetterCreateInput, CoverLetterUncheckedCreateInput>
    /**
     * In case the CoverLetter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoverLetterUpdateInput, CoverLetterUncheckedUpdateInput>
  }

  /**
   * CoverLetter delete
   */
  export type CoverLetterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter which CoverLetter to delete.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter deleteMany
   */
  export type CoverLetterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverLetters to delete
     */
    where?: CoverLetterWhereInput
    /**
     * Limit how many CoverLetters to delete.
     */
    limit?: number
  }

  /**
   * CoverLetter without action
   */
  export type CoverLetterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
  }


  /**
   * Model Assessment
   */

  export type AggregateAssessment = {
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  export type AssessmentAvgAggregateOutputType = {
    id: number | null
    applicantId: number | null
    quizScore: number | null
  }

  export type AssessmentSumAggregateOutputType = {
    id: number | null
    applicantId: number | null
    quizScore: number | null
  }

  export type AssessmentMinAggregateOutputType = {
    id: number | null
    applicantId: number | null
    quizScore: number | null
    category: string | null
    topic: string | null
    difficulty: string | null
    improvementTip: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentMaxAggregateOutputType = {
    id: number | null
    applicantId: number | null
    quizScore: number | null
    category: string | null
    topic: string | null
    difficulty: string | null
    improvementTip: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentCountAggregateOutputType = {
    id: number
    applicantId: number
    quizScore: number
    questions: number
    category: number
    topic: number
    difficulty: number
    improvementTip: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssessmentAvgAggregateInputType = {
    id?: true
    applicantId?: true
    quizScore?: true
  }

  export type AssessmentSumAggregateInputType = {
    id?: true
    applicantId?: true
    quizScore?: true
  }

  export type AssessmentMinAggregateInputType = {
    id?: true
    applicantId?: true
    quizScore?: true
    category?: true
    topic?: true
    difficulty?: true
    improvementTip?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentMaxAggregateInputType = {
    id?: true
    applicantId?: true
    quizScore?: true
    category?: true
    topic?: true
    difficulty?: true
    improvementTip?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentCountAggregateInputType = {
    id?: true
    applicantId?: true
    quizScore?: true
    questions?: true
    category?: true
    topic?: true
    difficulty?: true
    improvementTip?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessment to aggregate.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assessments
    **/
    _count?: true | AssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentMaxAggregateInputType
  }

  export type GetAssessmentAggregateType<T extends AssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessment[P]>
      : GetScalarType<T[P], AggregateAssessment[P]>
  }




  export type AssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithAggregationInput | AssessmentOrderByWithAggregationInput[]
    by: AssessmentScalarFieldEnum[] | AssessmentScalarFieldEnum
    having?: AssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentCountAggregateInputType | true
    _avg?: AssessmentAvgAggregateInputType
    _sum?: AssessmentSumAggregateInputType
    _min?: AssessmentMinAggregateInputType
    _max?: AssessmentMaxAggregateInputType
  }

  export type AssessmentGroupByOutputType = {
    id: number
    applicantId: number
    quizScore: number
    questions: JsonValue[]
    category: string
    topic: string
    difficulty: string | null
    improvementTip: string | null
    createdAt: Date
    updatedAt: Date
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  type GetAssessmentGroupByPayload<T extends AssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    quizScore?: boolean
    questions?: boolean
    category?: boolean
    topic?: boolean
    difficulty?: boolean
    improvementTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    quizScore?: boolean
    questions?: boolean
    category?: boolean
    topic?: boolean
    difficulty?: boolean
    improvementTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    quizScore?: boolean
    questions?: boolean
    category?: boolean
    topic?: boolean
    difficulty?: boolean
    improvementTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectScalar = {
    id?: boolean
    applicantId?: boolean
    quizScore?: boolean
    questions?: boolean
    category?: boolean
    topic?: boolean
    difficulty?: boolean
    improvementTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssessmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicantId" | "quizScore" | "questions" | "category" | "topic" | "difficulty" | "improvementTip" | "createdAt" | "updatedAt", ExtArgs["result"]["assessment"]>
  export type AssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }
  export type AssessmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }
  export type AssessmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }

  export type $AssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assessment"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicantId: number
      quizScore: number
      questions: Prisma.JsonValue[]
      category: string
      topic: string
      difficulty: string | null
      improvementTip: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assessment"]>
    composites: {}
  }

  type AssessmentGetPayload<S extends boolean | null | undefined | AssessmentDefaultArgs> = $Result.GetResult<Prisma.$AssessmentPayload, S>

  type AssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentCountAggregateInputType | true
    }

  export interface AssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assessment'], meta: { name: 'Assessment' } }
    /**
     * Find zero or one Assessment that matches the filter.
     * @param {AssessmentFindUniqueArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentFindUniqueArgs>(args: SelectSubset<T, AssessmentFindUniqueArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assessment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentFindUniqueOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentFindFirstArgs>(args?: SelectSubset<T, AssessmentFindFirstArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assessments
     * const assessments = await prisma.assessment.findMany()
     * 
     * // Get first 10 Assessments
     * const assessments = await prisma.assessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentWithIdOnly = await prisma.assessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentFindManyArgs>(args?: SelectSubset<T, AssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assessment.
     * @param {AssessmentCreateArgs} args - Arguments to create a Assessment.
     * @example
     * // Create one Assessment
     * const Assessment = await prisma.assessment.create({
     *   data: {
     *     // ... data to create a Assessment
     *   }
     * })
     * 
     */
    create<T extends AssessmentCreateArgs>(args: SelectSubset<T, AssessmentCreateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assessments.
     * @param {AssessmentCreateManyArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentCreateManyArgs>(args?: SelectSubset<T, AssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assessments and returns the data saved in the database.
     * @param {AssessmentCreateManyAndReturnArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assessment.
     * @param {AssessmentDeleteArgs} args - Arguments to delete one Assessment.
     * @example
     * // Delete one Assessment
     * const Assessment = await prisma.assessment.delete({
     *   where: {
     *     // ... filter to delete one Assessment
     *   }
     * })
     * 
     */
    delete<T extends AssessmentDeleteArgs>(args: SelectSubset<T, AssessmentDeleteArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assessment.
     * @param {AssessmentUpdateArgs} args - Arguments to update one Assessment.
     * @example
     * // Update one Assessment
     * const assessment = await prisma.assessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentUpdateArgs>(args: SelectSubset<T, AssessmentUpdateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assessments.
     * @param {AssessmentDeleteManyArgs} args - Arguments to filter Assessments to delete.
     * @example
     * // Delete a few Assessments
     * const { count } = await prisma.assessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentDeleteManyArgs>(args?: SelectSubset<T, AssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentUpdateManyArgs>(args: SelectSubset<T, AssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments and returns the data updated in the database.
     * @param {AssessmentUpdateManyAndReturnArgs} args - Arguments to update many Assessments.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssessmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssessmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assessment.
     * @param {AssessmentUpsertArgs} args - Arguments to update or create a Assessment.
     * @example
     * // Update or create a Assessment
     * const assessment = await prisma.assessment.upsert({
     *   create: {
     *     // ... data to create a Assessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assessment we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentUpsertArgs>(args: SelectSubset<T, AssessmentUpsertArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentCountArgs} args - Arguments to filter Assessments to count.
     * @example
     * // Count the number of Assessments
     * const count = await prisma.assessment.count({
     *   where: {
     *     // ... the filter for the Assessments we want to count
     *   }
     * })
    **/
    count<T extends AssessmentCountArgs>(
      args?: Subset<T, AssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentAggregateArgs>(args: Subset<T, AssessmentAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAggregateType<T>>

    /**
     * Group by Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assessment model
   */
  readonly fields: AssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ApplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantDefaultArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assessment model
   */
  interface AssessmentFieldRefs {
    readonly id: FieldRef<"Assessment", 'Int'>
    readonly applicantId: FieldRef<"Assessment", 'Int'>
    readonly quizScore: FieldRef<"Assessment", 'Float'>
    readonly questions: FieldRef<"Assessment", 'Json[]'>
    readonly category: FieldRef<"Assessment", 'String'>
    readonly topic: FieldRef<"Assessment", 'String'>
    readonly difficulty: FieldRef<"Assessment", 'String'>
    readonly improvementTip: FieldRef<"Assessment", 'String'>
    readonly createdAt: FieldRef<"Assessment", 'DateTime'>
    readonly updatedAt: FieldRef<"Assessment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assessment findUnique
   */
  export type AssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findUniqueOrThrow
   */
  export type AssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findFirst
   */
  export type AssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findFirstOrThrow
   */
  export type AssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findMany
   */
  export type AssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment create
   */
  export type AssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assessment.
     */
    data: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
  }

  /**
   * Assessment createMany
   */
  export type AssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment createManyAndReturn
   */
  export type AssessmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessment update
   */
  export type AssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assessment.
     */
    data: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
    /**
     * Choose, which Assessment to update.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment updateMany
   */
  export type AssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
  }

  /**
   * Assessment updateManyAndReturn
   */
  export type AssessmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessment upsert
   */
  export type AssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assessment to update in case it exists.
     */
    where: AssessmentWhereUniqueInput
    /**
     * In case the Assessment found by the `where` argument doesn't exist, create a new Assessment with this data.
     */
    create: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
    /**
     * In case the Assessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
  }

  /**
   * Assessment delete
   */
  export type AssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter which Assessment to delete.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment deleteMany
   */
  export type AssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to delete
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to delete.
     */
    limit?: number
  }

  /**
   * Assessment without action
   */
  export type AssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userName: 'userName',
    password: 'password',
    email: 'email',
    role: 'role',
    phoneNumber: 'phoneNumber',
    avatarUrl: 'avatarUrl',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userAgent: 'userAgent',
    ip: 'ip',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const EmployerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    bannerImageUrl: 'bannerImageUrl',
    organizationType: 'organizationType',
    teamSize: 'teamSize',
    yearOfEstablishment: 'yearOfEstablishment',
    websiteUrl: 'websiteUrl',
    location: 'location',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployerScalarFieldEnum = (typeof EmployerScalarFieldEnum)[keyof typeof EmployerScalarFieldEnum]


  export const ApplicantScalarFieldEnum: {
    id: 'id',
    biography: 'biography',
    dateOfBirth: 'dateOfBirth',
    nationality: 'nationality',
    maritalStatus: 'maritalStatus',
    gender: 'gender',
    education: 'education',
    experience: 'experience',
    websiteUrl: 'websiteUrl',
    location: 'location',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicantScalarFieldEnum = (typeof ApplicantScalarFieldEnum)[keyof typeof ApplicantScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    title: 'title',
    employerId: 'employerId',
    description: 'description',
    tags: 'tags',
    minSalary: 'minSalary',
    maxSalary: 'maxSalary',
    salaryCurrency: 'salaryCurrency',
    salaryPeriod: 'salaryPeriod',
    location: 'location',
    jobType: 'jobType',
    workType: 'workType',
    jobLevel: 'jobLevel',
    experience: 'experience',
    minEducation: 'minEducation',
    isFeatured: 'isFeatured',
    expiresAt: 'expiresAt',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const JobApplicationScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    applicantId: 'applicantId',
    resumeId: 'resumeId',
    coverLetter: 'coverLetter',
    status: 'status',
    appliedAt: 'appliedAt',
    updatedAt: 'updatedAt'
  };

  export type JobApplicationScalarFieldEnum = (typeof JobApplicationScalarFieldEnum)[keyof typeof JobApplicationScalarFieldEnum]


  export const SavedJobScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SavedJobScalarFieldEnum = (typeof SavedJobScalarFieldEnum)[keyof typeof SavedJobScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    applicantId: 'applicantId',
    fileUrl: 'fileUrl',
    fileName: 'fileName',
    fileSize: 'fileSize',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const CoverLetterScalarFieldEnum: {
    id: 'id',
    applicantId: 'applicantId',
    content: 'content',
    jobDescription: 'jobDescription',
    companyName: 'companyName',
    jobTitle: 'jobTitle',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoverLetterScalarFieldEnum = (typeof CoverLetterScalarFieldEnum)[keyof typeof CoverLetterScalarFieldEnum]


  export const AssessmentScalarFieldEnum: {
    id: 'id',
    applicantId: 'applicantId',
    quizScore: 'quizScore',
    questions: 'questions',
    category: 'category',
    topic: 'topic',
    difficulty: 'difficulty',
    improvementTip: 'improvementTip',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssessmentScalarFieldEnum = (typeof AssessmentScalarFieldEnum)[keyof typeof AssessmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MaritalStatus'
   */
  export type EnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus'>
    


  /**
   * Reference to a field of type 'MaritalStatus[]'
   */
  export type ListEnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'EducationLevel'
   */
  export type EnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel'>
    


  /**
   * Reference to a field of type 'EducationLevel[]'
   */
  export type ListEnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phoneNumber?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    applicant?: XOR<ApplicantNullableScalarRelationFilter, ApplicantWhereInput> | null
    employer?: XOR<EmployerNullableScalarRelationFilter, EmployerWhereInput> | null
    savedJobs?: SavedJobListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicant?: ApplicantOrderByWithRelationInput
    employer?: EmployerOrderByWithRelationInput
    savedJobs?: SavedJobOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userName?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phoneNumber?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    applicant?: XOR<ApplicantNullableScalarRelationFilter, ApplicantWhereInput> | null
    employer?: XOR<EmployerNullableScalarRelationFilter, EmployerWhereInput> | null
    savedJobs?: SavedJobListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "userName" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    userAgent?: StringFilter<"Session"> | string
    ip?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: IntFilter<"Session"> | number
    userAgent?: StringFilter<"Session"> | string
    ip?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: IntWithAggregatesFilter<"Session"> | number
    userAgent?: StringWithAggregatesFilter<"Session"> | string
    ip?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type EmployerWhereInput = {
    AND?: EmployerWhereInput | EmployerWhereInput[]
    OR?: EmployerWhereInput[]
    NOT?: EmployerWhereInput | EmployerWhereInput[]
    id?: IntFilter<"Employer"> | number
    name?: StringNullableFilter<"Employer"> | string | null
    description?: StringNullableFilter<"Employer"> | string | null
    bannerImageUrl?: StringNullableFilter<"Employer"> | string | null
    organizationType?: StringNullableFilter<"Employer"> | string | null
    teamSize?: StringNullableFilter<"Employer"> | string | null
    yearOfEstablishment?: IntNullableFilter<"Employer"> | number | null
    websiteUrl?: StringNullableFilter<"Employer"> | string | null
    location?: StringNullableFilter<"Employer"> | string | null
    deletedAt?: DateTimeNullableFilter<"Employer"> | Date | string | null
    createdAt?: DateTimeFilter<"Employer"> | Date | string
    updatedAt?: DateTimeFilter<"Employer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobs?: JobListRelationFilter
  }

  export type EmployerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    bannerImageUrl?: SortOrderInput | SortOrder
    organizationType?: SortOrderInput | SortOrder
    teamSize?: SortOrderInput | SortOrder
    yearOfEstablishment?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    jobs?: JobOrderByRelationAggregateInput
  }

  export type EmployerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmployerWhereInput | EmployerWhereInput[]
    OR?: EmployerWhereInput[]
    NOT?: EmployerWhereInput | EmployerWhereInput[]
    name?: StringNullableFilter<"Employer"> | string | null
    description?: StringNullableFilter<"Employer"> | string | null
    bannerImageUrl?: StringNullableFilter<"Employer"> | string | null
    organizationType?: StringNullableFilter<"Employer"> | string | null
    teamSize?: StringNullableFilter<"Employer"> | string | null
    yearOfEstablishment?: IntNullableFilter<"Employer"> | number | null
    websiteUrl?: StringNullableFilter<"Employer"> | string | null
    location?: StringNullableFilter<"Employer"> | string | null
    deletedAt?: DateTimeNullableFilter<"Employer"> | Date | string | null
    createdAt?: DateTimeFilter<"Employer"> | Date | string
    updatedAt?: DateTimeFilter<"Employer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobs?: JobListRelationFilter
  }, "id">

  export type EmployerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    bannerImageUrl?: SortOrderInput | SortOrder
    organizationType?: SortOrderInput | SortOrder
    teamSize?: SortOrderInput | SortOrder
    yearOfEstablishment?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployerCountOrderByAggregateInput
    _avg?: EmployerAvgOrderByAggregateInput
    _max?: EmployerMaxOrderByAggregateInput
    _min?: EmployerMinOrderByAggregateInput
    _sum?: EmployerSumOrderByAggregateInput
  }

  export type EmployerScalarWhereWithAggregatesInput = {
    AND?: EmployerScalarWhereWithAggregatesInput | EmployerScalarWhereWithAggregatesInput[]
    OR?: EmployerScalarWhereWithAggregatesInput[]
    NOT?: EmployerScalarWhereWithAggregatesInput | EmployerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employer"> | number
    name?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    description?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    bannerImageUrl?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    organizationType?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    teamSize?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    yearOfEstablishment?: IntNullableWithAggregatesFilter<"Employer"> | number | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    location?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Employer"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employer"> | Date | string
  }

  export type ApplicantWhereInput = {
    AND?: ApplicantWhereInput | ApplicantWhereInput[]
    OR?: ApplicantWhereInput[]
    NOT?: ApplicantWhereInput | ApplicantWhereInput[]
    id?: IntFilter<"Applicant"> | number
    biography?: StringNullableFilter<"Applicant"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Applicant"> | Date | string | null
    nationality?: StringNullableFilter<"Applicant"> | string | null
    maritalStatus?: EnumMaritalStatusNullableFilter<"Applicant"> | $Enums.MaritalStatus | null
    gender?: EnumGenderNullableFilter<"Applicant"> | $Enums.Gender | null
    education?: EnumEducationLevelNullableFilter<"Applicant"> | $Enums.EducationLevel | null
    experience?: StringNullableFilter<"Applicant"> | string | null
    websiteUrl?: StringNullableFilter<"Applicant"> | string | null
    location?: StringNullableFilter<"Applicant"> | string | null
    deletedAt?: DateTimeNullableFilter<"Applicant"> | Date | string | null
    createdAt?: DateTimeFilter<"Applicant"> | Date | string
    updatedAt?: DateTimeFilter<"Applicant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    applications?: JobApplicationListRelationFilter
    resumes?: ResumeListRelationFilter
    coverLetter?: CoverLetterListRelationFilter
    assessments?: AssessmentListRelationFilter
  }

  export type ApplicantOrderByWithRelationInput = {
    id?: SortOrder
    biography?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    applications?: JobApplicationOrderByRelationAggregateInput
    resumes?: ResumeOrderByRelationAggregateInput
    coverLetter?: CoverLetterOrderByRelationAggregateInput
    assessments?: AssessmentOrderByRelationAggregateInput
  }

  export type ApplicantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApplicantWhereInput | ApplicantWhereInput[]
    OR?: ApplicantWhereInput[]
    NOT?: ApplicantWhereInput | ApplicantWhereInput[]
    biography?: StringNullableFilter<"Applicant"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Applicant"> | Date | string | null
    nationality?: StringNullableFilter<"Applicant"> | string | null
    maritalStatus?: EnumMaritalStatusNullableFilter<"Applicant"> | $Enums.MaritalStatus | null
    gender?: EnumGenderNullableFilter<"Applicant"> | $Enums.Gender | null
    education?: EnumEducationLevelNullableFilter<"Applicant"> | $Enums.EducationLevel | null
    experience?: StringNullableFilter<"Applicant"> | string | null
    websiteUrl?: StringNullableFilter<"Applicant"> | string | null
    location?: StringNullableFilter<"Applicant"> | string | null
    deletedAt?: DateTimeNullableFilter<"Applicant"> | Date | string | null
    createdAt?: DateTimeFilter<"Applicant"> | Date | string
    updatedAt?: DateTimeFilter<"Applicant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    applications?: JobApplicationListRelationFilter
    resumes?: ResumeListRelationFilter
    coverLetter?: CoverLetterListRelationFilter
    assessments?: AssessmentListRelationFilter
  }, "id">

  export type ApplicantOrderByWithAggregationInput = {
    id?: SortOrder
    biography?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicantCountOrderByAggregateInput
    _avg?: ApplicantAvgOrderByAggregateInput
    _max?: ApplicantMaxOrderByAggregateInput
    _min?: ApplicantMinOrderByAggregateInput
    _sum?: ApplicantSumOrderByAggregateInput
  }

  export type ApplicantScalarWhereWithAggregatesInput = {
    AND?: ApplicantScalarWhereWithAggregatesInput | ApplicantScalarWhereWithAggregatesInput[]
    OR?: ApplicantScalarWhereWithAggregatesInput[]
    NOT?: ApplicantScalarWhereWithAggregatesInput | ApplicantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Applicant"> | number
    biography?: StringNullableWithAggregatesFilter<"Applicant"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Applicant"> | Date | string | null
    nationality?: StringNullableWithAggregatesFilter<"Applicant"> | string | null
    maritalStatus?: EnumMaritalStatusNullableWithAggregatesFilter<"Applicant"> | $Enums.MaritalStatus | null
    gender?: EnumGenderNullableWithAggregatesFilter<"Applicant"> | $Enums.Gender | null
    education?: EnumEducationLevelNullableWithAggregatesFilter<"Applicant"> | $Enums.EducationLevel | null
    experience?: StringNullableWithAggregatesFilter<"Applicant"> | string | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Applicant"> | string | null
    location?: StringNullableWithAggregatesFilter<"Applicant"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Applicant"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Applicant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Applicant"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: IntFilter<"Job"> | number
    title?: StringFilter<"Job"> | string
    employerId?: IntFilter<"Job"> | number
    description?: StringFilter<"Job"> | string
    tags?: StringNullableFilter<"Job"> | string | null
    minSalary?: IntNullableFilter<"Job"> | number | null
    maxSalary?: IntNullableFilter<"Job"> | number | null
    salaryCurrency?: StringNullableFilter<"Job"> | string | null
    salaryPeriod?: StringNullableFilter<"Job"> | string | null
    location?: StringNullableFilter<"Job"> | string | null
    jobType?: StringNullableFilter<"Job"> | string | null
    workType?: StringNullableFilter<"Job"> | string | null
    jobLevel?: StringNullableFilter<"Job"> | string | null
    experience?: StringNullableFilter<"Job"> | string | null
    minEducation?: StringNullableFilter<"Job"> | string | null
    isFeatured?: BoolFilter<"Job"> | boolean
    expiresAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    employer?: XOR<EmployerScalarRelationFilter, EmployerWhereInput>
    applications?: JobApplicationListRelationFilter
    savedJobs?: SavedJobListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    employerId?: SortOrder
    description?: SortOrder
    tags?: SortOrderInput | SortOrder
    minSalary?: SortOrderInput | SortOrder
    maxSalary?: SortOrderInput | SortOrder
    salaryCurrency?: SortOrderInput | SortOrder
    salaryPeriod?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    jobType?: SortOrderInput | SortOrder
    workType?: SortOrderInput | SortOrder
    jobLevel?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    minEducation?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employer?: EmployerOrderByWithRelationInput
    applications?: JobApplicationOrderByRelationAggregateInput
    savedJobs?: SavedJobOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    title?: StringFilter<"Job"> | string
    employerId?: IntFilter<"Job"> | number
    description?: StringFilter<"Job"> | string
    tags?: StringNullableFilter<"Job"> | string | null
    minSalary?: IntNullableFilter<"Job"> | number | null
    maxSalary?: IntNullableFilter<"Job"> | number | null
    salaryCurrency?: StringNullableFilter<"Job"> | string | null
    salaryPeriod?: StringNullableFilter<"Job"> | string | null
    location?: StringNullableFilter<"Job"> | string | null
    jobType?: StringNullableFilter<"Job"> | string | null
    workType?: StringNullableFilter<"Job"> | string | null
    jobLevel?: StringNullableFilter<"Job"> | string | null
    experience?: StringNullableFilter<"Job"> | string | null
    minEducation?: StringNullableFilter<"Job"> | string | null
    isFeatured?: BoolFilter<"Job"> | boolean
    expiresAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    employer?: XOR<EmployerScalarRelationFilter, EmployerWhereInput>
    applications?: JobApplicationListRelationFilter
    savedJobs?: SavedJobListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    employerId?: SortOrder
    description?: SortOrder
    tags?: SortOrderInput | SortOrder
    minSalary?: SortOrderInput | SortOrder
    maxSalary?: SortOrderInput | SortOrder
    salaryCurrency?: SortOrderInput | SortOrder
    salaryPeriod?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    jobType?: SortOrderInput | SortOrder
    workType?: SortOrderInput | SortOrder
    jobLevel?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    minEducation?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Job"> | number
    title?: StringWithAggregatesFilter<"Job"> | string
    employerId?: IntWithAggregatesFilter<"Job"> | number
    description?: StringWithAggregatesFilter<"Job"> | string
    tags?: StringNullableWithAggregatesFilter<"Job"> | string | null
    minSalary?: IntNullableWithAggregatesFilter<"Job"> | number | null
    maxSalary?: IntNullableWithAggregatesFilter<"Job"> | number | null
    salaryCurrency?: StringNullableWithAggregatesFilter<"Job"> | string | null
    salaryPeriod?: StringNullableWithAggregatesFilter<"Job"> | string | null
    location?: StringNullableWithAggregatesFilter<"Job"> | string | null
    jobType?: StringNullableWithAggregatesFilter<"Job"> | string | null
    workType?: StringNullableWithAggregatesFilter<"Job"> | string | null
    jobLevel?: StringNullableWithAggregatesFilter<"Job"> | string | null
    experience?: StringNullableWithAggregatesFilter<"Job"> | string | null
    minEducation?: StringNullableWithAggregatesFilter<"Job"> | string | null
    isFeatured?: BoolWithAggregatesFilter<"Job"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Job"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Job"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type JobApplicationWhereInput = {
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    id?: IntFilter<"JobApplication"> | number
    jobId?: IntFilter<"JobApplication"> | number
    applicantId?: IntFilter<"JobApplication"> | number
    resumeId?: IntFilter<"JobApplication"> | number
    coverLetter?: StringNullableFilter<"JobApplication"> | string | null
    status?: EnumApplicationStatusFilter<"JobApplication"> | $Enums.ApplicationStatus
    appliedAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type JobApplicationOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    resumeId?: SortOrder
    coverLetter?: SortOrderInput | SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
    applicant?: ApplicantOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
    resume?: ResumeOrderByWithRelationInput
  }

  export type JobApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    jobId_applicantId?: JobApplicationJobIdApplicantIdCompoundUniqueInput
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    jobId?: IntFilter<"JobApplication"> | number
    applicantId?: IntFilter<"JobApplication"> | number
    resumeId?: IntFilter<"JobApplication"> | number
    coverLetter?: StringNullableFilter<"JobApplication"> | string | null
    status?: EnumApplicationStatusFilter<"JobApplication"> | $Enums.ApplicationStatus
    appliedAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id" | "jobId_applicantId">

  export type JobApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    resumeId?: SortOrder
    coverLetter?: SortOrderInput | SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobApplicationCountOrderByAggregateInput
    _avg?: JobApplicationAvgOrderByAggregateInput
    _max?: JobApplicationMaxOrderByAggregateInput
    _min?: JobApplicationMinOrderByAggregateInput
    _sum?: JobApplicationSumOrderByAggregateInput
  }

  export type JobApplicationScalarWhereWithAggregatesInput = {
    AND?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    OR?: JobApplicationScalarWhereWithAggregatesInput[]
    NOT?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobApplication"> | number
    jobId?: IntWithAggregatesFilter<"JobApplication"> | number
    applicantId?: IntWithAggregatesFilter<"JobApplication"> | number
    resumeId?: IntWithAggregatesFilter<"JobApplication"> | number
    coverLetter?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    status?: EnumApplicationStatusWithAggregatesFilter<"JobApplication"> | $Enums.ApplicationStatus
    appliedAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
  }

  export type SavedJobWhereInput = {
    AND?: SavedJobWhereInput | SavedJobWhereInput[]
    OR?: SavedJobWhereInput[]
    NOT?: SavedJobWhereInput | SavedJobWhereInput[]
    id?: IntFilter<"SavedJob"> | number
    jobId?: IntFilter<"SavedJob"> | number
    userId?: IntFilter<"SavedJob"> | number
    createdAt?: DateTimeFilter<"SavedJob"> | Date | string
    updatedAt?: DateTimeFilter<"SavedJob"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SavedJobOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    job?: JobOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SavedJobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_jobId?: SavedJobUserIdJobIdCompoundUniqueInput
    AND?: SavedJobWhereInput | SavedJobWhereInput[]
    OR?: SavedJobWhereInput[]
    NOT?: SavedJobWhereInput | SavedJobWhereInput[]
    jobId?: IntFilter<"SavedJob"> | number
    userId?: IntFilter<"SavedJob"> | number
    createdAt?: DateTimeFilter<"SavedJob"> | Date | string
    updatedAt?: DateTimeFilter<"SavedJob"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_jobId">

  export type SavedJobOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SavedJobCountOrderByAggregateInput
    _avg?: SavedJobAvgOrderByAggregateInput
    _max?: SavedJobMaxOrderByAggregateInput
    _min?: SavedJobMinOrderByAggregateInput
    _sum?: SavedJobSumOrderByAggregateInput
  }

  export type SavedJobScalarWhereWithAggregatesInput = {
    AND?: SavedJobScalarWhereWithAggregatesInput | SavedJobScalarWhereWithAggregatesInput[]
    OR?: SavedJobScalarWhereWithAggregatesInput[]
    NOT?: SavedJobScalarWhereWithAggregatesInput | SavedJobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SavedJob"> | number
    jobId?: IntWithAggregatesFilter<"SavedJob"> | number
    userId?: IntWithAggregatesFilter<"SavedJob"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SavedJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SavedJob"> | Date | string
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: IntFilter<"Resume"> | number
    applicantId?: IntFilter<"Resume"> | number
    fileUrl?: StringFilter<"Resume"> | string
    fileName?: StringFilter<"Resume"> | string
    fileSize?: IntNullableFilter<"Resume"> | number | null
    isPrimary?: BoolFilter<"Resume"> | boolean
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    applications?: JobApplicationListRelationFilter
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applications?: JobApplicationOrderByRelationAggregateInput
    applicant?: ApplicantOrderByWithRelationInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    applicantId?: IntFilter<"Resume"> | number
    fileUrl?: StringFilter<"Resume"> | string
    fileName?: StringFilter<"Resume"> | string
    fileSize?: IntNullableFilter<"Resume"> | number | null
    isPrimary?: BoolFilter<"Resume"> | boolean
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    applications?: JobApplicationListRelationFilter
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }, "id">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _avg?: ResumeAvgOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
    _sum?: ResumeSumOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resume"> | number
    applicantId?: IntWithAggregatesFilter<"Resume"> | number
    fileUrl?: StringWithAggregatesFilter<"Resume"> | string
    fileName?: StringWithAggregatesFilter<"Resume"> | string
    fileSize?: IntNullableWithAggregatesFilter<"Resume"> | number | null
    isPrimary?: BoolWithAggregatesFilter<"Resume"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type CoverLetterWhereInput = {
    AND?: CoverLetterWhereInput | CoverLetterWhereInput[]
    OR?: CoverLetterWhereInput[]
    NOT?: CoverLetterWhereInput | CoverLetterWhereInput[]
    id?: IntFilter<"CoverLetter"> | number
    applicantId?: IntFilter<"CoverLetter"> | number
    content?: StringFilter<"CoverLetter"> | string
    jobDescription?: StringNullableFilter<"CoverLetter"> | string | null
    companyName?: StringFilter<"CoverLetter"> | string
    jobTitle?: StringFilter<"CoverLetter"> | string
    status?: StringFilter<"CoverLetter"> | string
    createdAt?: DateTimeFilter<"CoverLetter"> | Date | string
    updatedAt?: DateTimeFilter<"CoverLetter"> | Date | string
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }

  export type CoverLetterOrderByWithRelationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    content?: SortOrder
    jobDescription?: SortOrderInput | SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicant?: ApplicantOrderByWithRelationInput
  }

  export type CoverLetterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoverLetterWhereInput | CoverLetterWhereInput[]
    OR?: CoverLetterWhereInput[]
    NOT?: CoverLetterWhereInput | CoverLetterWhereInput[]
    applicantId?: IntFilter<"CoverLetter"> | number
    content?: StringFilter<"CoverLetter"> | string
    jobDescription?: StringNullableFilter<"CoverLetter"> | string | null
    companyName?: StringFilter<"CoverLetter"> | string
    jobTitle?: StringFilter<"CoverLetter"> | string
    status?: StringFilter<"CoverLetter"> | string
    createdAt?: DateTimeFilter<"CoverLetter"> | Date | string
    updatedAt?: DateTimeFilter<"CoverLetter"> | Date | string
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }, "id">

  export type CoverLetterOrderByWithAggregationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    content?: SortOrder
    jobDescription?: SortOrderInput | SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoverLetterCountOrderByAggregateInput
    _avg?: CoverLetterAvgOrderByAggregateInput
    _max?: CoverLetterMaxOrderByAggregateInput
    _min?: CoverLetterMinOrderByAggregateInput
    _sum?: CoverLetterSumOrderByAggregateInput
  }

  export type CoverLetterScalarWhereWithAggregatesInput = {
    AND?: CoverLetterScalarWhereWithAggregatesInput | CoverLetterScalarWhereWithAggregatesInput[]
    OR?: CoverLetterScalarWhereWithAggregatesInput[]
    NOT?: CoverLetterScalarWhereWithAggregatesInput | CoverLetterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CoverLetter"> | number
    applicantId?: IntWithAggregatesFilter<"CoverLetter"> | number
    content?: StringWithAggregatesFilter<"CoverLetter"> | string
    jobDescription?: StringNullableWithAggregatesFilter<"CoverLetter"> | string | null
    companyName?: StringWithAggregatesFilter<"CoverLetter"> | string
    jobTitle?: StringWithAggregatesFilter<"CoverLetter"> | string
    status?: StringWithAggregatesFilter<"CoverLetter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CoverLetter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CoverLetter"> | Date | string
  }

  export type AssessmentWhereInput = {
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    id?: IntFilter<"Assessment"> | number
    applicantId?: IntFilter<"Assessment"> | number
    quizScore?: FloatFilter<"Assessment"> | number
    questions?: JsonNullableListFilter<"Assessment">
    category?: StringFilter<"Assessment"> | string
    topic?: StringFilter<"Assessment"> | string
    difficulty?: StringNullableFilter<"Assessment"> | string | null
    improvementTip?: StringNullableFilter<"Assessment"> | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }

  export type AssessmentOrderByWithRelationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    quizScore?: SortOrder
    questions?: SortOrder
    category?: SortOrder
    topic?: SortOrder
    difficulty?: SortOrderInput | SortOrder
    improvementTip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicant?: ApplicantOrderByWithRelationInput
  }

  export type AssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    applicantId?: IntFilter<"Assessment"> | number
    quizScore?: FloatFilter<"Assessment"> | number
    questions?: JsonNullableListFilter<"Assessment">
    category?: StringFilter<"Assessment"> | string
    topic?: StringFilter<"Assessment"> | string
    difficulty?: StringNullableFilter<"Assessment"> | string | null
    improvementTip?: StringNullableFilter<"Assessment"> | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }, "id">

  export type AssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    quizScore?: SortOrder
    questions?: SortOrder
    category?: SortOrder
    topic?: SortOrder
    difficulty?: SortOrderInput | SortOrder
    improvementTip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssessmentCountOrderByAggregateInput
    _avg?: AssessmentAvgOrderByAggregateInput
    _max?: AssessmentMaxOrderByAggregateInput
    _min?: AssessmentMinOrderByAggregateInput
    _sum?: AssessmentSumOrderByAggregateInput
  }

  export type AssessmentScalarWhereWithAggregatesInput = {
    AND?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    OR?: AssessmentScalarWhereWithAggregatesInput[]
    NOT?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Assessment"> | number
    applicantId?: IntWithAggregatesFilter<"Assessment"> | number
    quizScore?: FloatWithAggregatesFilter<"Assessment"> | number
    questions?: JsonNullableListFilter<"Assessment">
    category?: StringWithAggregatesFilter<"Assessment"> | string
    topic?: StringWithAggregatesFilter<"Assessment"> | string
    difficulty?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    improvementTip?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    userName: string
    password: string
    email: string
    role?: $Enums.Role
    phoneNumber?: string | null
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantCreateNestedOneWithoutUserInput
    employer?: EmployerCreateNestedOneWithoutUserInput
    savedJobs?: SavedJobCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    userName: string
    password: string
    email: string
    role?: $Enums.Role
    phoneNumber?: string | null
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantUncheckedCreateNestedOneWithoutUserInput
    employer?: EmployerUncheckedCreateNestedOneWithoutUserInput
    savedJobs?: SavedJobUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneWithoutUserNestedInput
    employer?: EmployerUpdateOneWithoutUserNestedInput
    savedJobs?: SavedJobUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUncheckedUpdateOneWithoutUserNestedInput
    employer?: EmployerUncheckedUpdateOneWithoutUserNestedInput
    savedJobs?: SavedJobUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    userName: string
    password: string
    email: string
    role?: $Enums.Role
    phoneNumber?: string | null
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    userAgent: string
    ip: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    userId: number
    userAgent: string
    ip: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    userId: number
    userAgent: string
    ip: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployerCreateInput = {
    name?: string | null
    description?: string | null
    bannerImageUrl?: string | null
    organizationType?: string | null
    teamSize?: string | null
    yearOfEstablishment?: number | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployerInput
    jobs?: JobCreateNestedManyWithoutEmployerInput
  }

  export type EmployerUncheckedCreateInput = {
    id: number
    name?: string | null
    description?: string | null
    bannerImageUrl?: string | null
    organizationType?: string | null
    teamSize?: string | null
    yearOfEstablishment?: number | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutEmployerInput
  }

  export type EmployerUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizationType?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployerNestedInput
    jobs?: JobUpdateManyWithoutEmployerNestedInput
  }

  export type EmployerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizationType?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutEmployerNestedInput
  }

  export type EmployerCreateManyInput = {
    id: number
    name?: string | null
    description?: string | null
    bannerImageUrl?: string | null
    organizationType?: string | null
    teamSize?: string | null
    yearOfEstablishment?: number | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployerUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizationType?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizationType?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantCreateInput = {
    biography?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    gender?: $Enums.Gender | null
    education?: $Enums.EducationLevel | null
    experience?: string | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicantInput
    applications?: JobApplicationCreateNestedManyWithoutApplicantInput
    resumes?: ResumeCreateNestedManyWithoutApplicantInput
    coverLetter?: CoverLetterCreateNestedManyWithoutApplicantInput
    assessments?: AssessmentCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantUncheckedCreateInput = {
    id: number
    biography?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    gender?: $Enums.Gender | null
    education?: $Enums.EducationLevel | null
    experience?: string | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutApplicantInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutApplicantInput
    coverLetter?: CoverLetterUncheckedCreateNestedManyWithoutApplicantInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantUpdateInput = {
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicantNestedInput
    applications?: JobApplicationUpdateManyWithoutApplicantNestedInput
    resumes?: ResumeUpdateManyWithoutApplicantNestedInput
    coverLetter?: CoverLetterUpdateManyWithoutApplicantNestedInput
    assessments?: AssessmentUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutApplicantNestedInput
    coverLetter?: CoverLetterUncheckedUpdateManyWithoutApplicantNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantCreateManyInput = {
    id: number
    biography?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    gender?: $Enums.Gender | null
    education?: $Enums.EducationLevel | null
    experience?: string | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicantUpdateManyMutationInput = {
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    title: string
    description: string
    tags?: string | null
    minSalary?: number | null
    maxSalary?: number | null
    salaryCurrency?: string | null
    salaryPeriod?: string | null
    location?: string | null
    jobType?: string | null
    workType?: string | null
    jobLevel?: string | null
    experience?: string | null
    minEducation?: string | null
    isFeatured?: boolean
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: EmployerCreateNestedOneWithoutJobsInput
    applications?: JobApplicationCreateNestedManyWithoutJobInput
    savedJobs?: SavedJobCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: number
    title: string
    employerId: number
    description: string
    tags?: string | null
    minSalary?: number | null
    maxSalary?: number | null
    salaryCurrency?: string | null
    salaryPeriod?: string | null
    location?: string | null
    jobType?: string | null
    workType?: string | null
    jobLevel?: string | null
    experience?: string | null
    minEducation?: string | null
    isFeatured?: boolean
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobInput
    savedJobs?: SavedJobUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxSalary?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    jobLevel?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    minEducation?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: EmployerUpdateOneRequiredWithoutJobsNestedInput
    applications?: JobApplicationUpdateManyWithoutJobNestedInput
    savedJobs?: SavedJobUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    employerId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxSalary?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    jobLevel?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    minEducation?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutJobNestedInput
    savedJobs?: SavedJobUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: number
    title: string
    employerId: number
    description: string
    tags?: string | null
    minSalary?: number | null
    maxSalary?: number | null
    salaryCurrency?: string | null
    salaryPeriod?: string | null
    location?: string | null
    jobType?: string | null
    workType?: string | null
    jobLevel?: string | null
    experience?: string | null
    minEducation?: string | null
    isFeatured?: boolean
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxSalary?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    jobLevel?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    minEducation?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    employerId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxSalary?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    jobLevel?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    minEducation?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateInput = {
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
    applicant: ApplicantCreateNestedOneWithoutApplicationsInput
    job: JobCreateNestedOneWithoutApplicationsInput
    resume: ResumeCreateNestedOneWithoutApplicationsInput
  }

  export type JobApplicationUncheckedCreateInput = {
    id?: number
    jobId: number
    applicantId: number
    resumeId: number
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateInput = {
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneRequiredWithoutApplicationsNestedInput
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
    resume?: ResumeUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    resumeId?: IntFieldUpdateOperationsInput | number
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyInput = {
    id?: number
    jobId: number
    applicantId: number
    resumeId: number
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateManyMutationInput = {
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    resumeId?: IntFieldUpdateOperationsInput | number
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedJobCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    job: JobCreateNestedOneWithoutSavedJobsInput
    user: UserCreateNestedOneWithoutSavedJobsInput
  }

  export type SavedJobUncheckedCreateInput = {
    id?: number
    jobId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedJobUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutSavedJobsNestedInput
    user?: UserUpdateOneRequiredWithoutSavedJobsNestedInput
  }

  export type SavedJobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedJobCreateManyInput = {
    id?: number
    jobId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedJobUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedJobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateInput = {
    fileUrl: string
    fileName: string
    fileSize?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationCreateNestedManyWithoutResumeInput
    applicant: ApplicantCreateNestedOneWithoutResumesInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: number
    applicantId: number
    fileUrl: string
    fileName: string
    fileSize?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeUpdateInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUpdateManyWithoutResumeNestedInput
    applicant?: ApplicantUpdateOneRequiredWithoutResumesNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyInput = {
    id?: number
    applicantId: number
    fileUrl: string
    fileName: string
    fileSize?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterCreateInput = {
    content: string
    jobDescription?: string | null
    companyName: string
    jobTitle: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ApplicantCreateNestedOneWithoutCoverLetterInput
  }

  export type CoverLetterUncheckedCreateInput = {
    id?: number
    applicantId: number
    content: string
    jobDescription?: string | null
    companyName: string
    jobTitle: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoverLetterUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneRequiredWithoutCoverLetterNestedInput
  }

  export type CoverLetterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterCreateManyInput = {
    id?: number
    applicantId: number
    content: string
    jobDescription?: string | null
    companyName: string
    jobTitle: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoverLetterUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentCreateInput = {
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    topic: string
    difficulty?: string | null
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ApplicantCreateNestedOneWithoutAssessmentsInput
  }

  export type AssessmentUncheckedCreateInput = {
    id?: number
    applicantId: number
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    topic: string
    difficulty?: string | null
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentUpdateInput = {
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneRequiredWithoutAssessmentsNestedInput
  }

  export type AssessmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentCreateManyInput = {
    id?: number
    applicantId: number
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    topic: string
    difficulty?: string | null
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentUpdateManyMutationInput = {
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ApplicantNullableScalarRelationFilter = {
    is?: ApplicantWhereInput | null
    isNot?: ApplicantWhereInput | null
  }

  export type EmployerNullableScalarRelationFilter = {
    is?: EmployerWhereInput | null
    isNot?: EmployerWhereInput | null
  }

  export type SavedJobListRelationFilter = {
    every?: SavedJobWhereInput
    some?: SavedJobWhereInput
    none?: SavedJobWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SavedJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    phoneNumber?: SortOrder
    avatarUrl?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    phoneNumber?: SortOrder
    avatarUrl?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    phoneNumber?: SortOrder
    avatarUrl?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    bannerImageUrl?: SortOrder
    organizationType?: SortOrder
    teamSize?: SortOrder
    yearOfEstablishment?: SortOrder
    websiteUrl?: SortOrder
    location?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployerAvgOrderByAggregateInput = {
    id?: SortOrder
    yearOfEstablishment?: SortOrder
  }

  export type EmployerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    bannerImageUrl?: SortOrder
    organizationType?: SortOrder
    teamSize?: SortOrder
    yearOfEstablishment?: SortOrder
    websiteUrl?: SortOrder
    location?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    bannerImageUrl?: SortOrder
    organizationType?: SortOrder
    teamSize?: SortOrder
    yearOfEstablishment?: SortOrder
    websiteUrl?: SortOrder
    location?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployerSumOrderByAggregateInput = {
    id?: SortOrder
    yearOfEstablishment?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumMaritalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableFilter<$PrismaModel> | $Enums.MaritalStatus | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type EnumEducationLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEducationLevelNullableFilter<$PrismaModel> | $Enums.EducationLevel | null
  }

  export type JobApplicationListRelationFilter = {
    every?: JobApplicationWhereInput
    some?: JobApplicationWhereInput
    none?: JobApplicationWhereInput
  }

  export type ResumeListRelationFilter = {
    every?: ResumeWhereInput
    some?: ResumeWhereInput
    none?: ResumeWhereInput
  }

  export type CoverLetterListRelationFilter = {
    every?: CoverLetterWhereInput
    some?: CoverLetterWhereInput
    none?: CoverLetterWhereInput
  }

  export type AssessmentListRelationFilter = {
    every?: AssessmentWhereInput
    some?: AssessmentWhereInput
    none?: AssessmentWhereInput
  }

  export type JobApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoverLetterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicantCountOrderByAggregateInput = {
    id?: SortOrder
    biography?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    maritalStatus?: SortOrder
    gender?: SortOrder
    education?: SortOrder
    experience?: SortOrder
    websiteUrl?: SortOrder
    location?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ApplicantMaxOrderByAggregateInput = {
    id?: SortOrder
    biography?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    maritalStatus?: SortOrder
    gender?: SortOrder
    education?: SortOrder
    experience?: SortOrder
    websiteUrl?: SortOrder
    location?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicantMinOrderByAggregateInput = {
    id?: SortOrder
    biography?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    maritalStatus?: SortOrder
    gender?: SortOrder
    education?: SortOrder
    experience?: SortOrder
    websiteUrl?: SortOrder
    location?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicantSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type EnumEducationLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEducationLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EmployerScalarRelationFilter = {
    is?: EmployerWhereInput
    isNot?: EmployerWhereInput
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    employerId?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    minSalary?: SortOrder
    maxSalary?: SortOrder
    salaryCurrency?: SortOrder
    salaryPeriod?: SortOrder
    location?: SortOrder
    jobType?: SortOrder
    workType?: SortOrder
    jobLevel?: SortOrder
    experience?: SortOrder
    minEducation?: SortOrder
    isFeatured?: SortOrder
    expiresAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    id?: SortOrder
    employerId?: SortOrder
    minSalary?: SortOrder
    maxSalary?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    employerId?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    minSalary?: SortOrder
    maxSalary?: SortOrder
    salaryCurrency?: SortOrder
    salaryPeriod?: SortOrder
    location?: SortOrder
    jobType?: SortOrder
    workType?: SortOrder
    jobLevel?: SortOrder
    experience?: SortOrder
    minEducation?: SortOrder
    isFeatured?: SortOrder
    expiresAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    employerId?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    minSalary?: SortOrder
    maxSalary?: SortOrder
    salaryCurrency?: SortOrder
    salaryPeriod?: SortOrder
    location?: SortOrder
    jobType?: SortOrder
    workType?: SortOrder
    jobLevel?: SortOrder
    experience?: SortOrder
    minEducation?: SortOrder
    isFeatured?: SortOrder
    expiresAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    id?: SortOrder
    employerId?: SortOrder
    minSalary?: SortOrder
    maxSalary?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type ApplicantScalarRelationFilter = {
    is?: ApplicantWhereInput
    isNot?: ApplicantWhereInput
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type ResumeScalarRelationFilter = {
    is?: ResumeWhereInput
    isNot?: ResumeWhereInput
  }

  export type JobApplicationJobIdApplicantIdCompoundUniqueInput = {
    jobId: number
    applicantId: number
  }

  export type JobApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    resumeId?: SortOrder
    coverLetter?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    resumeId?: SortOrder
  }

  export type JobApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    resumeId?: SortOrder
    coverLetter?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    resumeId?: SortOrder
    coverLetter?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    resumeId?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type SavedJobUserIdJobIdCompoundUniqueInput = {
    userId: number
    jobId: number
  }

  export type SavedJobCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedJobAvgOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
  }

  export type SavedJobMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedJobMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedJobSumOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    fileSize?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeSumOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    fileSize?: SortOrder
  }

  export type CoverLetterCountOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    content?: SortOrder
    jobDescription?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoverLetterAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type CoverLetterMaxOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    content?: SortOrder
    jobDescription?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoverLetterMinOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    content?: SortOrder
    jobDescription?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoverLetterSumOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    quizScore?: SortOrder
    questions?: SortOrder
    category?: SortOrder
    topic?: SortOrder
    difficulty?: SortOrder
    improvementTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    quizScore?: SortOrder
  }

  export type AssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    quizScore?: SortOrder
    category?: SortOrder
    topic?: SortOrder
    difficulty?: SortOrder
    improvementTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    quizScore?: SortOrder
    category?: SortOrder
    topic?: SortOrder
    difficulty?: SortOrder
    improvementTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentSumOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    quizScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ApplicantCreateNestedOneWithoutUserInput = {
    create?: XOR<ApplicantCreateWithoutUserInput, ApplicantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutUserInput
    connect?: ApplicantWhereUniqueInput
  }

  export type EmployerCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployerCreateWithoutUserInput, EmployerUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutUserInput
    connect?: EmployerWhereUniqueInput
  }

  export type SavedJobCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedJobCreateWithoutUserInput, SavedJobUncheckedCreateWithoutUserInput> | SavedJobCreateWithoutUserInput[] | SavedJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedJobCreateOrConnectWithoutUserInput | SavedJobCreateOrConnectWithoutUserInput[]
    createMany?: SavedJobCreateManyUserInputEnvelope
    connect?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ApplicantUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ApplicantCreateWithoutUserInput, ApplicantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutUserInput
    connect?: ApplicantWhereUniqueInput
  }

  export type EmployerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployerCreateWithoutUserInput, EmployerUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutUserInput
    connect?: EmployerWhereUniqueInput
  }

  export type SavedJobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedJobCreateWithoutUserInput, SavedJobUncheckedCreateWithoutUserInput> | SavedJobCreateWithoutUserInput[] | SavedJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedJobCreateOrConnectWithoutUserInput | SavedJobCreateOrConnectWithoutUserInput[]
    createMany?: SavedJobCreateManyUserInputEnvelope
    connect?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApplicantUpdateOneWithoutUserNestedInput = {
    create?: XOR<ApplicantCreateWithoutUserInput, ApplicantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutUserInput
    upsert?: ApplicantUpsertWithoutUserInput
    disconnect?: ApplicantWhereInput | boolean
    delete?: ApplicantWhereInput | boolean
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutUserInput, ApplicantUpdateWithoutUserInput>, ApplicantUncheckedUpdateWithoutUserInput>
  }

  export type EmployerUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployerCreateWithoutUserInput, EmployerUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutUserInput
    upsert?: EmployerUpsertWithoutUserInput
    disconnect?: EmployerWhereInput | boolean
    delete?: EmployerWhereInput | boolean
    connect?: EmployerWhereUniqueInput
    update?: XOR<XOR<EmployerUpdateToOneWithWhereWithoutUserInput, EmployerUpdateWithoutUserInput>, EmployerUncheckedUpdateWithoutUserInput>
  }

  export type SavedJobUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedJobCreateWithoutUserInput, SavedJobUncheckedCreateWithoutUserInput> | SavedJobCreateWithoutUserInput[] | SavedJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedJobCreateOrConnectWithoutUserInput | SavedJobCreateOrConnectWithoutUserInput[]
    upsert?: SavedJobUpsertWithWhereUniqueWithoutUserInput | SavedJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedJobCreateManyUserInputEnvelope
    set?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    disconnect?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    delete?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    connect?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    update?: SavedJobUpdateWithWhereUniqueWithoutUserInput | SavedJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedJobUpdateManyWithWhereWithoutUserInput | SavedJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedJobScalarWhereInput | SavedJobScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApplicantUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ApplicantCreateWithoutUserInput, ApplicantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutUserInput
    upsert?: ApplicantUpsertWithoutUserInput
    disconnect?: ApplicantWhereInput | boolean
    delete?: ApplicantWhereInput | boolean
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutUserInput, ApplicantUpdateWithoutUserInput>, ApplicantUncheckedUpdateWithoutUserInput>
  }

  export type EmployerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployerCreateWithoutUserInput, EmployerUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutUserInput
    upsert?: EmployerUpsertWithoutUserInput
    disconnect?: EmployerWhereInput | boolean
    delete?: EmployerWhereInput | boolean
    connect?: EmployerWhereUniqueInput
    update?: XOR<XOR<EmployerUpdateToOneWithWhereWithoutUserInput, EmployerUpdateWithoutUserInput>, EmployerUncheckedUpdateWithoutUserInput>
  }

  export type SavedJobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedJobCreateWithoutUserInput, SavedJobUncheckedCreateWithoutUserInput> | SavedJobCreateWithoutUserInput[] | SavedJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedJobCreateOrConnectWithoutUserInput | SavedJobCreateOrConnectWithoutUserInput[]
    upsert?: SavedJobUpsertWithWhereUniqueWithoutUserInput | SavedJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedJobCreateManyUserInputEnvelope
    set?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    disconnect?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    delete?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    connect?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    update?: SavedJobUpdateWithWhereUniqueWithoutUserInput | SavedJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedJobUpdateManyWithWhereWithoutUserInput | SavedJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedJobScalarWhereInput | SavedJobScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutEmployerInput = {
    create?: XOR<UserCreateWithoutEmployerInput, UserUncheckedCreateWithoutEmployerInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployerInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedManyWithoutEmployerInput = {
    create?: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput> | JobCreateWithoutEmployerInput[] | JobUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobCreateOrConnectWithoutEmployerInput | JobCreateOrConnectWithoutEmployerInput[]
    createMany?: JobCreateManyEmployerInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutEmployerInput = {
    create?: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput> | JobCreateWithoutEmployerInput[] | JobUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobCreateOrConnectWithoutEmployerInput | JobCreateOrConnectWithoutEmployerInput[]
    createMany?: JobCreateManyEmployerInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutEmployerNestedInput = {
    create?: XOR<UserCreateWithoutEmployerInput, UserUncheckedCreateWithoutEmployerInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployerInput
    upsert?: UserUpsertWithoutEmployerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployerInput, UserUpdateWithoutEmployerInput>, UserUncheckedUpdateWithoutEmployerInput>
  }

  export type JobUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput> | JobCreateWithoutEmployerInput[] | JobUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobCreateOrConnectWithoutEmployerInput | JobCreateOrConnectWithoutEmployerInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutEmployerInput | JobUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: JobCreateManyEmployerInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutEmployerInput | JobUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: JobUpdateManyWithWhereWithoutEmployerInput | JobUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput> | JobCreateWithoutEmployerInput[] | JobUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobCreateOrConnectWithoutEmployerInput | JobCreateOrConnectWithoutEmployerInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutEmployerInput | JobUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: JobCreateManyEmployerInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutEmployerInput | JobUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: JobUpdateManyWithWhereWithoutEmployerInput | JobUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApplicantInput = {
    create?: XOR<UserCreateWithoutApplicantInput, UserUncheckedCreateWithoutApplicantInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicantInput
    connect?: UserWhereUniqueInput
  }

  export type JobApplicationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<JobApplicationCreateWithoutApplicantInput, JobApplicationUncheckedCreateWithoutApplicantInput> | JobApplicationCreateWithoutApplicantInput[] | JobApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutApplicantInput | JobApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: JobApplicationCreateManyApplicantInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type ResumeCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ResumeCreateWithoutApplicantInput, ResumeUncheckedCreateWithoutApplicantInput> | ResumeCreateWithoutApplicantInput[] | ResumeUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutApplicantInput | ResumeCreateOrConnectWithoutApplicantInput[]
    createMany?: ResumeCreateManyApplicantInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type CoverLetterCreateNestedManyWithoutApplicantInput = {
    create?: XOR<CoverLetterCreateWithoutApplicantInput, CoverLetterUncheckedCreateWithoutApplicantInput> | CoverLetterCreateWithoutApplicantInput[] | CoverLetterUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutApplicantInput | CoverLetterCreateOrConnectWithoutApplicantInput[]
    createMany?: CoverLetterCreateManyApplicantInputEnvelope
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
  }

  export type AssessmentCreateNestedManyWithoutApplicantInput = {
    create?: XOR<AssessmentCreateWithoutApplicantInput, AssessmentUncheckedCreateWithoutApplicantInput> | AssessmentCreateWithoutApplicantInput[] | AssessmentUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutApplicantInput | AssessmentCreateOrConnectWithoutApplicantInput[]
    createMany?: AssessmentCreateManyApplicantInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<JobApplicationCreateWithoutApplicantInput, JobApplicationUncheckedCreateWithoutApplicantInput> | JobApplicationCreateWithoutApplicantInput[] | JobApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutApplicantInput | JobApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: JobApplicationCreateManyApplicantInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ResumeCreateWithoutApplicantInput, ResumeUncheckedCreateWithoutApplicantInput> | ResumeCreateWithoutApplicantInput[] | ResumeUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutApplicantInput | ResumeCreateOrConnectWithoutApplicantInput[]
    createMany?: ResumeCreateManyApplicantInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type CoverLetterUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<CoverLetterCreateWithoutApplicantInput, CoverLetterUncheckedCreateWithoutApplicantInput> | CoverLetterCreateWithoutApplicantInput[] | CoverLetterUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutApplicantInput | CoverLetterCreateOrConnectWithoutApplicantInput[]
    createMany?: CoverLetterCreateManyApplicantInputEnvelope
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
  }

  export type AssessmentUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<AssessmentCreateWithoutApplicantInput, AssessmentUncheckedCreateWithoutApplicantInput> | AssessmentCreateWithoutApplicantInput[] | AssessmentUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutApplicantInput | AssessmentCreateOrConnectWithoutApplicantInput[]
    createMany?: AssessmentCreateManyApplicantInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type NullableEnumMaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaritalStatus | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableEnumEducationLevelFieldUpdateOperationsInput = {
    set?: $Enums.EducationLevel | null
  }

  export type UserUpdateOneRequiredWithoutApplicantNestedInput = {
    create?: XOR<UserCreateWithoutApplicantInput, UserUncheckedCreateWithoutApplicantInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicantInput
    upsert?: UserUpsertWithoutApplicantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicantInput, UserUpdateWithoutApplicantInput>, UserUncheckedUpdateWithoutApplicantInput>
  }

  export type JobApplicationUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<JobApplicationCreateWithoutApplicantInput, JobApplicationUncheckedCreateWithoutApplicantInput> | JobApplicationCreateWithoutApplicantInput[] | JobApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutApplicantInput | JobApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutApplicantInput | JobApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: JobApplicationCreateManyApplicantInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutApplicantInput | JobApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutApplicantInput | JobApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type ResumeUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ResumeCreateWithoutApplicantInput, ResumeUncheckedCreateWithoutApplicantInput> | ResumeCreateWithoutApplicantInput[] | ResumeUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutApplicantInput | ResumeCreateOrConnectWithoutApplicantInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutApplicantInput | ResumeUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ResumeCreateManyApplicantInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutApplicantInput | ResumeUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutApplicantInput | ResumeUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type CoverLetterUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<CoverLetterCreateWithoutApplicantInput, CoverLetterUncheckedCreateWithoutApplicantInput> | CoverLetterCreateWithoutApplicantInput[] | CoverLetterUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutApplicantInput | CoverLetterCreateOrConnectWithoutApplicantInput[]
    upsert?: CoverLetterUpsertWithWhereUniqueWithoutApplicantInput | CoverLetterUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: CoverLetterCreateManyApplicantInputEnvelope
    set?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    disconnect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    delete?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    update?: CoverLetterUpdateWithWhereUniqueWithoutApplicantInput | CoverLetterUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: CoverLetterUpdateManyWithWhereWithoutApplicantInput | CoverLetterUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
  }

  export type AssessmentUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<AssessmentCreateWithoutApplicantInput, AssessmentUncheckedCreateWithoutApplicantInput> | AssessmentCreateWithoutApplicantInput[] | AssessmentUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutApplicantInput | AssessmentCreateOrConnectWithoutApplicantInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutApplicantInput | AssessmentUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: AssessmentCreateManyApplicantInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutApplicantInput | AssessmentUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutApplicantInput | AssessmentUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<JobApplicationCreateWithoutApplicantInput, JobApplicationUncheckedCreateWithoutApplicantInput> | JobApplicationCreateWithoutApplicantInput[] | JobApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutApplicantInput | JobApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutApplicantInput | JobApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: JobApplicationCreateManyApplicantInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutApplicantInput | JobApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutApplicantInput | JobApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ResumeCreateWithoutApplicantInput, ResumeUncheckedCreateWithoutApplicantInput> | ResumeCreateWithoutApplicantInput[] | ResumeUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutApplicantInput | ResumeCreateOrConnectWithoutApplicantInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutApplicantInput | ResumeUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ResumeCreateManyApplicantInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutApplicantInput | ResumeUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutApplicantInput | ResumeUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type CoverLetterUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<CoverLetterCreateWithoutApplicantInput, CoverLetterUncheckedCreateWithoutApplicantInput> | CoverLetterCreateWithoutApplicantInput[] | CoverLetterUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutApplicantInput | CoverLetterCreateOrConnectWithoutApplicantInput[]
    upsert?: CoverLetterUpsertWithWhereUniqueWithoutApplicantInput | CoverLetterUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: CoverLetterCreateManyApplicantInputEnvelope
    set?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    disconnect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    delete?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    update?: CoverLetterUpdateWithWhereUniqueWithoutApplicantInput | CoverLetterUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: CoverLetterUpdateManyWithWhereWithoutApplicantInput | CoverLetterUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
  }

  export type AssessmentUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<AssessmentCreateWithoutApplicantInput, AssessmentUncheckedCreateWithoutApplicantInput> | AssessmentCreateWithoutApplicantInput[] | AssessmentUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutApplicantInput | AssessmentCreateOrConnectWithoutApplicantInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutApplicantInput | AssessmentUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: AssessmentCreateManyApplicantInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutApplicantInput | AssessmentUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutApplicantInput | AssessmentUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type EmployerCreateNestedOneWithoutJobsInput = {
    create?: XOR<EmployerCreateWithoutJobsInput, EmployerUncheckedCreateWithoutJobsInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutJobsInput
    connect?: EmployerWhereUniqueInput
  }

  export type JobApplicationCreateNestedManyWithoutJobInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type SavedJobCreateNestedManyWithoutJobInput = {
    create?: XOR<SavedJobCreateWithoutJobInput, SavedJobUncheckedCreateWithoutJobInput> | SavedJobCreateWithoutJobInput[] | SavedJobUncheckedCreateWithoutJobInput[]
    connectOrCreate?: SavedJobCreateOrConnectWithoutJobInput | SavedJobCreateOrConnectWithoutJobInput[]
    createMany?: SavedJobCreateManyJobInputEnvelope
    connect?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type SavedJobUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<SavedJobCreateWithoutJobInput, SavedJobUncheckedCreateWithoutJobInput> | SavedJobCreateWithoutJobInput[] | SavedJobUncheckedCreateWithoutJobInput[]
    connectOrCreate?: SavedJobCreateOrConnectWithoutJobInput | SavedJobCreateOrConnectWithoutJobInput[]
    createMany?: SavedJobCreateManyJobInputEnvelope
    connect?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EmployerUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<EmployerCreateWithoutJobsInput, EmployerUncheckedCreateWithoutJobsInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutJobsInput
    upsert?: EmployerUpsertWithoutJobsInput
    connect?: EmployerWhereUniqueInput
    update?: XOR<XOR<EmployerUpdateToOneWithWhereWithoutJobsInput, EmployerUpdateWithoutJobsInput>, EmployerUncheckedUpdateWithoutJobsInput>
  }

  export type JobApplicationUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobInput | JobApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobInput | JobApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobInput | JobApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type SavedJobUpdateManyWithoutJobNestedInput = {
    create?: XOR<SavedJobCreateWithoutJobInput, SavedJobUncheckedCreateWithoutJobInput> | SavedJobCreateWithoutJobInput[] | SavedJobUncheckedCreateWithoutJobInput[]
    connectOrCreate?: SavedJobCreateOrConnectWithoutJobInput | SavedJobCreateOrConnectWithoutJobInput[]
    upsert?: SavedJobUpsertWithWhereUniqueWithoutJobInput | SavedJobUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: SavedJobCreateManyJobInputEnvelope
    set?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    disconnect?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    delete?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    connect?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    update?: SavedJobUpdateWithWhereUniqueWithoutJobInput | SavedJobUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: SavedJobUpdateManyWithWhereWithoutJobInput | SavedJobUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: SavedJobScalarWhereInput | SavedJobScalarWhereInput[]
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobInput | JobApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobInput | JobApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobInput | JobApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type SavedJobUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<SavedJobCreateWithoutJobInput, SavedJobUncheckedCreateWithoutJobInput> | SavedJobCreateWithoutJobInput[] | SavedJobUncheckedCreateWithoutJobInput[]
    connectOrCreate?: SavedJobCreateOrConnectWithoutJobInput | SavedJobCreateOrConnectWithoutJobInput[]
    upsert?: SavedJobUpsertWithWhereUniqueWithoutJobInput | SavedJobUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: SavedJobCreateManyJobInputEnvelope
    set?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    disconnect?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    delete?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    connect?: SavedJobWhereUniqueInput | SavedJobWhereUniqueInput[]
    update?: SavedJobUpdateWithWhereUniqueWithoutJobInput | SavedJobUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: SavedJobUpdateManyWithWhereWithoutJobInput | SavedJobUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: SavedJobScalarWhereInput | SavedJobScalarWhereInput[]
  }

  export type ApplicantCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ApplicantCreateWithoutApplicationsInput, ApplicantUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutApplicationsInput
    connect?: ApplicantWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    connect?: JobWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ResumeCreateWithoutApplicationsInput, ResumeUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutApplicationsInput
    connect?: ResumeWhereUniqueInput
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type ApplicantUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ApplicantCreateWithoutApplicationsInput, ApplicantUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutApplicationsInput
    upsert?: ApplicantUpsertWithoutApplicationsInput
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutApplicationsInput, ApplicantUpdateWithoutApplicationsInput>, ApplicantUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    upsert?: JobUpsertWithoutApplicationsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutApplicationsInput, JobUpdateWithoutApplicationsInput>, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type ResumeUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ResumeCreateWithoutApplicationsInput, ResumeUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutApplicationsInput
    upsert?: ResumeUpsertWithoutApplicationsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutApplicationsInput, ResumeUpdateWithoutApplicationsInput>, ResumeUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobCreateNestedOneWithoutSavedJobsInput = {
    create?: XOR<JobCreateWithoutSavedJobsInput, JobUncheckedCreateWithoutSavedJobsInput>
    connectOrCreate?: JobCreateOrConnectWithoutSavedJobsInput
    connect?: JobWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSavedJobsInput = {
    create?: XOR<UserCreateWithoutSavedJobsInput, UserUncheckedCreateWithoutSavedJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedJobsInput
    connect?: UserWhereUniqueInput
  }

  export type JobUpdateOneRequiredWithoutSavedJobsNestedInput = {
    create?: XOR<JobCreateWithoutSavedJobsInput, JobUncheckedCreateWithoutSavedJobsInput>
    connectOrCreate?: JobCreateOrConnectWithoutSavedJobsInput
    upsert?: JobUpsertWithoutSavedJobsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutSavedJobsInput, JobUpdateWithoutSavedJobsInput>, JobUncheckedUpdateWithoutSavedJobsInput>
  }

  export type UserUpdateOneRequiredWithoutSavedJobsNestedInput = {
    create?: XOR<UserCreateWithoutSavedJobsInput, UserUncheckedCreateWithoutSavedJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedJobsInput
    upsert?: UserUpsertWithoutSavedJobsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedJobsInput, UserUpdateWithoutSavedJobsInput>, UserUncheckedUpdateWithoutSavedJobsInput>
  }

  export type JobApplicationCreateNestedManyWithoutResumeInput = {
    create?: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput> | JobApplicationCreateWithoutResumeInput[] | JobApplicationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutResumeInput | JobApplicationCreateOrConnectWithoutResumeInput[]
    createMany?: JobApplicationCreateManyResumeInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type ApplicantCreateNestedOneWithoutResumesInput = {
    create?: XOR<ApplicantCreateWithoutResumesInput, ApplicantUncheckedCreateWithoutResumesInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutResumesInput
    connect?: ApplicantWhereUniqueInput
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput> | JobApplicationCreateWithoutResumeInput[] | JobApplicationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutResumeInput | JobApplicationCreateOrConnectWithoutResumeInput[]
    createMany?: JobApplicationCreateManyResumeInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type JobApplicationUpdateManyWithoutResumeNestedInput = {
    create?: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput> | JobApplicationCreateWithoutResumeInput[] | JobApplicationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutResumeInput | JobApplicationCreateOrConnectWithoutResumeInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutResumeInput | JobApplicationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: JobApplicationCreateManyResumeInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutResumeInput | JobApplicationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutResumeInput | JobApplicationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type ApplicantUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<ApplicantCreateWithoutResumesInput, ApplicantUncheckedCreateWithoutResumesInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutResumesInput
    upsert?: ApplicantUpsertWithoutResumesInput
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutResumesInput, ApplicantUpdateWithoutResumesInput>, ApplicantUncheckedUpdateWithoutResumesInput>
  }

  export type JobApplicationUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput> | JobApplicationCreateWithoutResumeInput[] | JobApplicationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutResumeInput | JobApplicationCreateOrConnectWithoutResumeInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutResumeInput | JobApplicationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: JobApplicationCreateManyResumeInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutResumeInput | JobApplicationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutResumeInput | JobApplicationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type ApplicantCreateNestedOneWithoutCoverLetterInput = {
    create?: XOR<ApplicantCreateWithoutCoverLetterInput, ApplicantUncheckedCreateWithoutCoverLetterInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutCoverLetterInput
    connect?: ApplicantWhereUniqueInput
  }

  export type ApplicantUpdateOneRequiredWithoutCoverLetterNestedInput = {
    create?: XOR<ApplicantCreateWithoutCoverLetterInput, ApplicantUncheckedCreateWithoutCoverLetterInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutCoverLetterInput
    upsert?: ApplicantUpsertWithoutCoverLetterInput
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutCoverLetterInput, ApplicantUpdateWithoutCoverLetterInput>, ApplicantUncheckedUpdateWithoutCoverLetterInput>
  }

  export type AssessmentCreatequestionsInput = {
    set: InputJsonValue[]
  }

  export type ApplicantCreateNestedOneWithoutAssessmentsInput = {
    create?: XOR<ApplicantCreateWithoutAssessmentsInput, ApplicantUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutAssessmentsInput
    connect?: ApplicantWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssessmentUpdatequestionsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type ApplicantUpdateOneRequiredWithoutAssessmentsNestedInput = {
    create?: XOR<ApplicantCreateWithoutAssessmentsInput, ApplicantUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutAssessmentsInput
    upsert?: ApplicantUpsertWithoutAssessmentsInput
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutAssessmentsInput, ApplicantUpdateWithoutAssessmentsInput>, ApplicantUncheckedUpdateWithoutAssessmentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMaritalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableFilter<$PrismaModel> | $Enums.MaritalStatus | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumEducationLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEducationLevelNullableFilter<$PrismaModel> | $Enums.EducationLevel | null
  }

  export type NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumEducationLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEducationLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ApplicantCreateWithoutUserInput = {
    biography?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    gender?: $Enums.Gender | null
    education?: $Enums.EducationLevel | null
    experience?: string | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationCreateNestedManyWithoutApplicantInput
    resumes?: ResumeCreateNestedManyWithoutApplicantInput
    coverLetter?: CoverLetterCreateNestedManyWithoutApplicantInput
    assessments?: AssessmentCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantUncheckedCreateWithoutUserInput = {
    biography?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    gender?: $Enums.Gender | null
    education?: $Enums.EducationLevel | null
    experience?: string | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutApplicantInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutApplicantInput
    coverLetter?: CoverLetterUncheckedCreateNestedManyWithoutApplicantInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantCreateOrConnectWithoutUserInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutUserInput, ApplicantUncheckedCreateWithoutUserInput>
  }

  export type EmployerCreateWithoutUserInput = {
    name?: string | null
    description?: string | null
    bannerImageUrl?: string | null
    organizationType?: string | null
    teamSize?: string | null
    yearOfEstablishment?: number | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobCreateNestedManyWithoutEmployerInput
  }

  export type EmployerUncheckedCreateWithoutUserInput = {
    name?: string | null
    description?: string | null
    bannerImageUrl?: string | null
    organizationType?: string | null
    teamSize?: string | null
    yearOfEstablishment?: number | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutEmployerInput
  }

  export type EmployerCreateOrConnectWithoutUserInput = {
    where: EmployerWhereUniqueInput
    create: XOR<EmployerCreateWithoutUserInput, EmployerUncheckedCreateWithoutUserInput>
  }

  export type SavedJobCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    job: JobCreateNestedOneWithoutSavedJobsInput
  }

  export type SavedJobUncheckedCreateWithoutUserInput = {
    id?: number
    jobId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedJobCreateOrConnectWithoutUserInput = {
    where: SavedJobWhereUniqueInput
    create: XOR<SavedJobCreateWithoutUserInput, SavedJobUncheckedCreateWithoutUserInput>
  }

  export type SavedJobCreateManyUserInputEnvelope = {
    data: SavedJobCreateManyUserInput | SavedJobCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    userAgent: string
    ip: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    userAgent: string
    ip: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApplicantUpsertWithoutUserInput = {
    update: XOR<ApplicantUpdateWithoutUserInput, ApplicantUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicantCreateWithoutUserInput, ApplicantUncheckedCreateWithoutUserInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutUserInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutUserInput, ApplicantUncheckedUpdateWithoutUserInput>
  }

  export type ApplicantUpdateWithoutUserInput = {
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUpdateManyWithoutApplicantNestedInput
    resumes?: ResumeUpdateManyWithoutApplicantNestedInput
    coverLetter?: CoverLetterUpdateManyWithoutApplicantNestedInput
    assessments?: AssessmentUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutUserInput = {
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutApplicantNestedInput
    coverLetter?: CoverLetterUncheckedUpdateManyWithoutApplicantNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type EmployerUpsertWithoutUserInput = {
    update: XOR<EmployerUpdateWithoutUserInput, EmployerUncheckedUpdateWithoutUserInput>
    create: XOR<EmployerCreateWithoutUserInput, EmployerUncheckedCreateWithoutUserInput>
    where?: EmployerWhereInput
  }

  export type EmployerUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployerWhereInput
    data: XOR<EmployerUpdateWithoutUserInput, EmployerUncheckedUpdateWithoutUserInput>
  }

  export type EmployerUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizationType?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutEmployerNestedInput
  }

  export type EmployerUncheckedUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizationType?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutEmployerNestedInput
  }

  export type SavedJobUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedJobWhereUniqueInput
    update: XOR<SavedJobUpdateWithoutUserInput, SavedJobUncheckedUpdateWithoutUserInput>
    create: XOR<SavedJobCreateWithoutUserInput, SavedJobUncheckedCreateWithoutUserInput>
  }

  export type SavedJobUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedJobWhereUniqueInput
    data: XOR<SavedJobUpdateWithoutUserInput, SavedJobUncheckedUpdateWithoutUserInput>
  }

  export type SavedJobUpdateManyWithWhereWithoutUserInput = {
    where: SavedJobScalarWhereInput
    data: XOR<SavedJobUpdateManyMutationInput, SavedJobUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedJobScalarWhereInput = {
    AND?: SavedJobScalarWhereInput | SavedJobScalarWhereInput[]
    OR?: SavedJobScalarWhereInput[]
    NOT?: SavedJobScalarWhereInput | SavedJobScalarWhereInput[]
    id?: IntFilter<"SavedJob"> | number
    jobId?: IntFilter<"SavedJob"> | number
    userId?: IntFilter<"SavedJob"> | number
    createdAt?: DateTimeFilter<"SavedJob"> | Date | string
    updatedAt?: DateTimeFilter<"SavedJob"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    userAgent?: StringFilter<"Session"> | string
    ip?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    name: string
    userName: string
    password: string
    email: string
    role?: $Enums.Role
    phoneNumber?: string | null
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantCreateNestedOneWithoutUserInput
    employer?: EmployerCreateNestedOneWithoutUserInput
    savedJobs?: SavedJobCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    userName: string
    password: string
    email: string
    role?: $Enums.Role
    phoneNumber?: string | null
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantUncheckedCreateNestedOneWithoutUserInput
    employer?: EmployerUncheckedCreateNestedOneWithoutUserInput
    savedJobs?: SavedJobUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneWithoutUserNestedInput
    employer?: EmployerUpdateOneWithoutUserNestedInput
    savedJobs?: SavedJobUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUncheckedUpdateOneWithoutUserNestedInput
    employer?: EmployerUncheckedUpdateOneWithoutUserNestedInput
    savedJobs?: SavedJobUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmployerInput = {
    name: string
    userName: string
    password: string
    email: string
    role?: $Enums.Role
    phoneNumber?: string | null
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantCreateNestedOneWithoutUserInput
    savedJobs?: SavedJobCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployerInput = {
    id?: number
    name: string
    userName: string
    password: string
    email: string
    role?: $Enums.Role
    phoneNumber?: string | null
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantUncheckedCreateNestedOneWithoutUserInput
    savedJobs?: SavedJobUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployerInput, UserUncheckedCreateWithoutEmployerInput>
  }

  export type JobCreateWithoutEmployerInput = {
    title: string
    description: string
    tags?: string | null
    minSalary?: number | null
    maxSalary?: number | null
    salaryCurrency?: string | null
    salaryPeriod?: string | null
    location?: string | null
    jobType?: string | null
    workType?: string | null
    jobLevel?: string | null
    experience?: string | null
    minEducation?: string | null
    isFeatured?: boolean
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationCreateNestedManyWithoutJobInput
    savedJobs?: SavedJobCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutEmployerInput = {
    id?: number
    title: string
    description: string
    tags?: string | null
    minSalary?: number | null
    maxSalary?: number | null
    salaryCurrency?: string | null
    salaryPeriod?: string | null
    location?: string | null
    jobType?: string | null
    workType?: string | null
    jobLevel?: string | null
    experience?: string | null
    minEducation?: string | null
    isFeatured?: boolean
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobInput
    savedJobs?: SavedJobUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutEmployerInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput>
  }

  export type JobCreateManyEmployerInputEnvelope = {
    data: JobCreateManyEmployerInput | JobCreateManyEmployerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEmployerInput = {
    update: XOR<UserUpdateWithoutEmployerInput, UserUncheckedUpdateWithoutEmployerInput>
    create: XOR<UserCreateWithoutEmployerInput, UserUncheckedCreateWithoutEmployerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployerInput, UserUncheckedUpdateWithoutEmployerInput>
  }

  export type UserUpdateWithoutEmployerInput = {
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneWithoutUserNestedInput
    savedJobs?: SavedJobUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUncheckedUpdateOneWithoutUserNestedInput
    savedJobs?: SavedJobUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobUpsertWithWhereUniqueWithoutEmployerInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutEmployerInput, JobUncheckedUpdateWithoutEmployerInput>
    create: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput>
  }

  export type JobUpdateWithWhereUniqueWithoutEmployerInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutEmployerInput, JobUncheckedUpdateWithoutEmployerInput>
  }

  export type JobUpdateManyWithWhereWithoutEmployerInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutEmployerInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: IntFilter<"Job"> | number
    title?: StringFilter<"Job"> | string
    employerId?: IntFilter<"Job"> | number
    description?: StringFilter<"Job"> | string
    tags?: StringNullableFilter<"Job"> | string | null
    minSalary?: IntNullableFilter<"Job"> | number | null
    maxSalary?: IntNullableFilter<"Job"> | number | null
    salaryCurrency?: StringNullableFilter<"Job"> | string | null
    salaryPeriod?: StringNullableFilter<"Job"> | string | null
    location?: StringNullableFilter<"Job"> | string | null
    jobType?: StringNullableFilter<"Job"> | string | null
    workType?: StringNullableFilter<"Job"> | string | null
    jobLevel?: StringNullableFilter<"Job"> | string | null
    experience?: StringNullableFilter<"Job"> | string | null
    minEducation?: StringNullableFilter<"Job"> | string | null
    isFeatured?: BoolFilter<"Job"> | boolean
    expiresAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
  }

  export type UserCreateWithoutApplicantInput = {
    name: string
    userName: string
    password: string
    email: string
    role?: $Enums.Role
    phoneNumber?: string | null
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employer?: EmployerCreateNestedOneWithoutUserInput
    savedJobs?: SavedJobCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApplicantInput = {
    id?: number
    name: string
    userName: string
    password: string
    email: string
    role?: $Enums.Role
    phoneNumber?: string | null
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employer?: EmployerUncheckedCreateNestedOneWithoutUserInput
    savedJobs?: SavedJobUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApplicantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicantInput, UserUncheckedCreateWithoutApplicantInput>
  }

  export type JobApplicationCreateWithoutApplicantInput = {
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
    job: JobCreateNestedOneWithoutApplicationsInput
    resume: ResumeCreateNestedOneWithoutApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutApplicantInput = {
    id?: number
    jobId: number
    resumeId: number
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationCreateOrConnectWithoutApplicantInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutApplicantInput, JobApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type JobApplicationCreateManyApplicantInputEnvelope = {
    data: JobApplicationCreateManyApplicantInput | JobApplicationCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type ResumeCreateWithoutApplicantInput = {
    fileUrl: string
    fileName: string
    fileSize?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutApplicantInput = {
    id?: number
    fileUrl: string
    fileName: string
    fileSize?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutApplicantInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutApplicantInput, ResumeUncheckedCreateWithoutApplicantInput>
  }

  export type ResumeCreateManyApplicantInputEnvelope = {
    data: ResumeCreateManyApplicantInput | ResumeCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type CoverLetterCreateWithoutApplicantInput = {
    content: string
    jobDescription?: string | null
    companyName: string
    jobTitle: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoverLetterUncheckedCreateWithoutApplicantInput = {
    id?: number
    content: string
    jobDescription?: string | null
    companyName: string
    jobTitle: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoverLetterCreateOrConnectWithoutApplicantInput = {
    where: CoverLetterWhereUniqueInput
    create: XOR<CoverLetterCreateWithoutApplicantInput, CoverLetterUncheckedCreateWithoutApplicantInput>
  }

  export type CoverLetterCreateManyApplicantInputEnvelope = {
    data: CoverLetterCreateManyApplicantInput | CoverLetterCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentCreateWithoutApplicantInput = {
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    topic: string
    difficulty?: string | null
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentUncheckedCreateWithoutApplicantInput = {
    id?: number
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    topic: string
    difficulty?: string | null
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentCreateOrConnectWithoutApplicantInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutApplicantInput, AssessmentUncheckedCreateWithoutApplicantInput>
  }

  export type AssessmentCreateManyApplicantInputEnvelope = {
    data: AssessmentCreateManyApplicantInput | AssessmentCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutApplicantInput = {
    update: XOR<UserUpdateWithoutApplicantInput, UserUncheckedUpdateWithoutApplicantInput>
    create: XOR<UserCreateWithoutApplicantInput, UserUncheckedCreateWithoutApplicantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicantInput, UserUncheckedUpdateWithoutApplicantInput>
  }

  export type UserUpdateWithoutApplicantInput = {
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: EmployerUpdateOneWithoutUserNestedInput
    savedJobs?: SavedJobUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: EmployerUncheckedUpdateOneWithoutUserNestedInput
    savedJobs?: SavedJobUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutApplicantInput, JobApplicationUncheckedUpdateWithoutApplicantInput>
    create: XOR<JobApplicationCreateWithoutApplicantInput, JobApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutApplicantInput, JobApplicationUncheckedUpdateWithoutApplicantInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutApplicantInput>
  }

  export type JobApplicationScalarWhereInput = {
    AND?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    OR?: JobApplicationScalarWhereInput[]
    NOT?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    id?: IntFilter<"JobApplication"> | number
    jobId?: IntFilter<"JobApplication"> | number
    applicantId?: IntFilter<"JobApplication"> | number
    resumeId?: IntFilter<"JobApplication"> | number
    coverLetter?: StringNullableFilter<"JobApplication"> | string | null
    status?: EnumApplicationStatusFilter<"JobApplication"> | $Enums.ApplicationStatus
    appliedAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
  }

  export type ResumeUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutApplicantInput, ResumeUncheckedUpdateWithoutApplicantInput>
    create: XOR<ResumeCreateWithoutApplicantInput, ResumeUncheckedCreateWithoutApplicantInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutApplicantInput, ResumeUncheckedUpdateWithoutApplicantInput>
  }

  export type ResumeUpdateManyWithWhereWithoutApplicantInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutApplicantInput>
  }

  export type ResumeScalarWhereInput = {
    AND?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    OR?: ResumeScalarWhereInput[]
    NOT?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    id?: IntFilter<"Resume"> | number
    applicantId?: IntFilter<"Resume"> | number
    fileUrl?: StringFilter<"Resume"> | string
    fileName?: StringFilter<"Resume"> | string
    fileSize?: IntNullableFilter<"Resume"> | number | null
    isPrimary?: BoolFilter<"Resume"> | boolean
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
  }

  export type CoverLetterUpsertWithWhereUniqueWithoutApplicantInput = {
    where: CoverLetterWhereUniqueInput
    update: XOR<CoverLetterUpdateWithoutApplicantInput, CoverLetterUncheckedUpdateWithoutApplicantInput>
    create: XOR<CoverLetterCreateWithoutApplicantInput, CoverLetterUncheckedCreateWithoutApplicantInput>
  }

  export type CoverLetterUpdateWithWhereUniqueWithoutApplicantInput = {
    where: CoverLetterWhereUniqueInput
    data: XOR<CoverLetterUpdateWithoutApplicantInput, CoverLetterUncheckedUpdateWithoutApplicantInput>
  }

  export type CoverLetterUpdateManyWithWhereWithoutApplicantInput = {
    where: CoverLetterScalarWhereInput
    data: XOR<CoverLetterUpdateManyMutationInput, CoverLetterUncheckedUpdateManyWithoutApplicantInput>
  }

  export type CoverLetterScalarWhereInput = {
    AND?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
    OR?: CoverLetterScalarWhereInput[]
    NOT?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
    id?: IntFilter<"CoverLetter"> | number
    applicantId?: IntFilter<"CoverLetter"> | number
    content?: StringFilter<"CoverLetter"> | string
    jobDescription?: StringNullableFilter<"CoverLetter"> | string | null
    companyName?: StringFilter<"CoverLetter"> | string
    jobTitle?: StringFilter<"CoverLetter"> | string
    status?: StringFilter<"CoverLetter"> | string
    createdAt?: DateTimeFilter<"CoverLetter"> | Date | string
    updatedAt?: DateTimeFilter<"CoverLetter"> | Date | string
  }

  export type AssessmentUpsertWithWhereUniqueWithoutApplicantInput = {
    where: AssessmentWhereUniqueInput
    update: XOR<AssessmentUpdateWithoutApplicantInput, AssessmentUncheckedUpdateWithoutApplicantInput>
    create: XOR<AssessmentCreateWithoutApplicantInput, AssessmentUncheckedCreateWithoutApplicantInput>
  }

  export type AssessmentUpdateWithWhereUniqueWithoutApplicantInput = {
    where: AssessmentWhereUniqueInput
    data: XOR<AssessmentUpdateWithoutApplicantInput, AssessmentUncheckedUpdateWithoutApplicantInput>
  }

  export type AssessmentUpdateManyWithWhereWithoutApplicantInput = {
    where: AssessmentScalarWhereInput
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyWithoutApplicantInput>
  }

  export type AssessmentScalarWhereInput = {
    AND?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    OR?: AssessmentScalarWhereInput[]
    NOT?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    id?: IntFilter<"Assessment"> | number
    applicantId?: IntFilter<"Assessment"> | number
    quizScore?: FloatFilter<"Assessment"> | number
    questions?: JsonNullableListFilter<"Assessment">
    category?: StringFilter<"Assessment"> | string
    topic?: StringFilter<"Assessment"> | string
    difficulty?: StringNullableFilter<"Assessment"> | string | null
    improvementTip?: StringNullableFilter<"Assessment"> | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
  }

  export type EmployerCreateWithoutJobsInput = {
    name?: string | null
    description?: string | null
    bannerImageUrl?: string | null
    organizationType?: string | null
    teamSize?: string | null
    yearOfEstablishment?: number | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployerInput
  }

  export type EmployerUncheckedCreateWithoutJobsInput = {
    id: number
    name?: string | null
    description?: string | null
    bannerImageUrl?: string | null
    organizationType?: string | null
    teamSize?: string | null
    yearOfEstablishment?: number | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployerCreateOrConnectWithoutJobsInput = {
    where: EmployerWhereUniqueInput
    create: XOR<EmployerCreateWithoutJobsInput, EmployerUncheckedCreateWithoutJobsInput>
  }

  export type JobApplicationCreateWithoutJobInput = {
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
    applicant: ApplicantCreateNestedOneWithoutApplicationsInput
    resume: ResumeCreateNestedOneWithoutApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutJobInput = {
    id?: number
    applicantId: number
    resumeId: number
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationCreateOrConnectWithoutJobInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput>
  }

  export type JobApplicationCreateManyJobInputEnvelope = {
    data: JobApplicationCreateManyJobInput | JobApplicationCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type SavedJobCreateWithoutJobInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedJobsInput
  }

  export type SavedJobUncheckedCreateWithoutJobInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedJobCreateOrConnectWithoutJobInput = {
    where: SavedJobWhereUniqueInput
    create: XOR<SavedJobCreateWithoutJobInput, SavedJobUncheckedCreateWithoutJobInput>
  }

  export type SavedJobCreateManyJobInputEnvelope = {
    data: SavedJobCreateManyJobInput | SavedJobCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type EmployerUpsertWithoutJobsInput = {
    update: XOR<EmployerUpdateWithoutJobsInput, EmployerUncheckedUpdateWithoutJobsInput>
    create: XOR<EmployerCreateWithoutJobsInput, EmployerUncheckedCreateWithoutJobsInput>
    where?: EmployerWhereInput
  }

  export type EmployerUpdateToOneWithWhereWithoutJobsInput = {
    where?: EmployerWhereInput
    data: XOR<EmployerUpdateWithoutJobsInput, EmployerUncheckedUpdateWithoutJobsInput>
  }

  export type EmployerUpdateWithoutJobsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizationType?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployerNestedInput
  }

  export type EmployerUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizationType?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfEstablishment?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutJobInput, JobApplicationUncheckedUpdateWithoutJobInput>
    create: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutJobInput, JobApplicationUncheckedUpdateWithoutJobInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutJobInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutJobInput>
  }

  export type SavedJobUpsertWithWhereUniqueWithoutJobInput = {
    where: SavedJobWhereUniqueInput
    update: XOR<SavedJobUpdateWithoutJobInput, SavedJobUncheckedUpdateWithoutJobInput>
    create: XOR<SavedJobCreateWithoutJobInput, SavedJobUncheckedCreateWithoutJobInput>
  }

  export type SavedJobUpdateWithWhereUniqueWithoutJobInput = {
    where: SavedJobWhereUniqueInput
    data: XOR<SavedJobUpdateWithoutJobInput, SavedJobUncheckedUpdateWithoutJobInput>
  }

  export type SavedJobUpdateManyWithWhereWithoutJobInput = {
    where: SavedJobScalarWhereInput
    data: XOR<SavedJobUpdateManyMutationInput, SavedJobUncheckedUpdateManyWithoutJobInput>
  }

  export type ApplicantCreateWithoutApplicationsInput = {
    biography?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    gender?: $Enums.Gender | null
    education?: $Enums.EducationLevel | null
    experience?: string | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicantInput
    resumes?: ResumeCreateNestedManyWithoutApplicantInput
    coverLetter?: CoverLetterCreateNestedManyWithoutApplicantInput
    assessments?: AssessmentCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantUncheckedCreateWithoutApplicationsInput = {
    id: number
    biography?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    gender?: $Enums.Gender | null
    education?: $Enums.EducationLevel | null
    experience?: string | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutApplicantInput
    coverLetter?: CoverLetterUncheckedCreateNestedManyWithoutApplicantInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantCreateOrConnectWithoutApplicationsInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutApplicationsInput, ApplicantUncheckedCreateWithoutApplicationsInput>
  }

  export type JobCreateWithoutApplicationsInput = {
    title: string
    description: string
    tags?: string | null
    minSalary?: number | null
    maxSalary?: number | null
    salaryCurrency?: string | null
    salaryPeriod?: string | null
    location?: string | null
    jobType?: string | null
    workType?: string | null
    jobLevel?: string | null
    experience?: string | null
    minEducation?: string | null
    isFeatured?: boolean
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: EmployerCreateNestedOneWithoutJobsInput
    savedJobs?: SavedJobCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutApplicationsInput = {
    id?: number
    title: string
    employerId: number
    description: string
    tags?: string | null
    minSalary?: number | null
    maxSalary?: number | null
    salaryCurrency?: string | null
    salaryPeriod?: string | null
    location?: string | null
    jobType?: string | null
    workType?: string | null
    jobLevel?: string | null
    experience?: string | null
    minEducation?: string | null
    isFeatured?: boolean
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedJobs?: SavedJobUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutApplicationsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
  }

  export type ResumeCreateWithoutApplicationsInput = {
    fileUrl: string
    fileName: string
    fileSize?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ApplicantCreateNestedOneWithoutResumesInput
  }

  export type ResumeUncheckedCreateWithoutApplicationsInput = {
    id?: number
    applicantId: number
    fileUrl: string
    fileName: string
    fileSize?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeCreateOrConnectWithoutApplicationsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutApplicationsInput, ResumeUncheckedCreateWithoutApplicationsInput>
  }

  export type ApplicantUpsertWithoutApplicationsInput = {
    update: XOR<ApplicantUpdateWithoutApplicationsInput, ApplicantUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ApplicantCreateWithoutApplicationsInput, ApplicantUncheckedCreateWithoutApplicationsInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutApplicationsInput, ApplicantUncheckedUpdateWithoutApplicationsInput>
  }

  export type ApplicantUpdateWithoutApplicationsInput = {
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicantNestedInput
    resumes?: ResumeUpdateManyWithoutApplicantNestedInput
    coverLetter?: CoverLetterUpdateManyWithoutApplicantNestedInput
    assessments?: AssessmentUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutApplicantNestedInput
    coverLetter?: CoverLetterUncheckedUpdateManyWithoutApplicantNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type JobUpsertWithoutApplicationsInput = {
    update: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobUpdateWithoutApplicationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxSalary?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    jobLevel?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    minEducation?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: EmployerUpdateOneRequiredWithoutJobsNestedInput
    savedJobs?: SavedJobUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    employerId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxSalary?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    jobLevel?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    minEducation?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedJobs?: SavedJobUncheckedUpdateManyWithoutJobNestedInput
  }

  export type ResumeUpsertWithoutApplicationsInput = {
    update: XOR<ResumeUpdateWithoutApplicationsInput, ResumeUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ResumeCreateWithoutApplicationsInput, ResumeUncheckedCreateWithoutApplicationsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutApplicationsInput, ResumeUncheckedUpdateWithoutApplicationsInput>
  }

  export type ResumeUpdateWithoutApplicationsInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneRequiredWithoutResumesNestedInput
  }

  export type ResumeUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateWithoutSavedJobsInput = {
    title: string
    description: string
    tags?: string | null
    minSalary?: number | null
    maxSalary?: number | null
    salaryCurrency?: string | null
    salaryPeriod?: string | null
    location?: string | null
    jobType?: string | null
    workType?: string | null
    jobLevel?: string | null
    experience?: string | null
    minEducation?: string | null
    isFeatured?: boolean
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: EmployerCreateNestedOneWithoutJobsInput
    applications?: JobApplicationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutSavedJobsInput = {
    id?: number
    title: string
    employerId: number
    description: string
    tags?: string | null
    minSalary?: number | null
    maxSalary?: number | null
    salaryCurrency?: string | null
    salaryPeriod?: string | null
    location?: string | null
    jobType?: string | null
    workType?: string | null
    jobLevel?: string | null
    experience?: string | null
    minEducation?: string | null
    isFeatured?: boolean
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutSavedJobsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutSavedJobsInput, JobUncheckedCreateWithoutSavedJobsInput>
  }

  export type UserCreateWithoutSavedJobsInput = {
    name: string
    userName: string
    password: string
    email: string
    role?: $Enums.Role
    phoneNumber?: string | null
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantCreateNestedOneWithoutUserInput
    employer?: EmployerCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedJobsInput = {
    id?: number
    name: string
    userName: string
    password: string
    email: string
    role?: $Enums.Role
    phoneNumber?: string | null
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantUncheckedCreateNestedOneWithoutUserInput
    employer?: EmployerUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedJobsInput, UserUncheckedCreateWithoutSavedJobsInput>
  }

  export type JobUpsertWithoutSavedJobsInput = {
    update: XOR<JobUpdateWithoutSavedJobsInput, JobUncheckedUpdateWithoutSavedJobsInput>
    create: XOR<JobCreateWithoutSavedJobsInput, JobUncheckedCreateWithoutSavedJobsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutSavedJobsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutSavedJobsInput, JobUncheckedUpdateWithoutSavedJobsInput>
  }

  export type JobUpdateWithoutSavedJobsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxSalary?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    jobLevel?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    minEducation?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: EmployerUpdateOneRequiredWithoutJobsNestedInput
    applications?: JobApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutSavedJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    employerId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxSalary?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    jobLevel?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    minEducation?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type UserUpsertWithoutSavedJobsInput = {
    update: XOR<UserUpdateWithoutSavedJobsInput, UserUncheckedUpdateWithoutSavedJobsInput>
    create: XOR<UserCreateWithoutSavedJobsInput, UserUncheckedCreateWithoutSavedJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedJobsInput, UserUncheckedUpdateWithoutSavedJobsInput>
  }

  export type UserUpdateWithoutSavedJobsInput = {
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneWithoutUserNestedInput
    employer?: EmployerUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUncheckedUpdateOneWithoutUserNestedInput
    employer?: EmployerUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobApplicationCreateWithoutResumeInput = {
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
    applicant: ApplicantCreateNestedOneWithoutApplicationsInput
    job: JobCreateNestedOneWithoutApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutResumeInput = {
    id?: number
    jobId: number
    applicantId: number
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationCreateOrConnectWithoutResumeInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput>
  }

  export type JobApplicationCreateManyResumeInputEnvelope = {
    data: JobApplicationCreateManyResumeInput | JobApplicationCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type ApplicantCreateWithoutResumesInput = {
    biography?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    gender?: $Enums.Gender | null
    education?: $Enums.EducationLevel | null
    experience?: string | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicantInput
    applications?: JobApplicationCreateNestedManyWithoutApplicantInput
    coverLetter?: CoverLetterCreateNestedManyWithoutApplicantInput
    assessments?: AssessmentCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantUncheckedCreateWithoutResumesInput = {
    id: number
    biography?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    gender?: $Enums.Gender | null
    education?: $Enums.EducationLevel | null
    experience?: string | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutApplicantInput
    coverLetter?: CoverLetterUncheckedCreateNestedManyWithoutApplicantInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantCreateOrConnectWithoutResumesInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutResumesInput, ApplicantUncheckedCreateWithoutResumesInput>
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutResumeInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutResumeInput, JobApplicationUncheckedUpdateWithoutResumeInput>
    create: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutResumeInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutResumeInput, JobApplicationUncheckedUpdateWithoutResumeInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutResumeInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutResumeInput>
  }

  export type ApplicantUpsertWithoutResumesInput = {
    update: XOR<ApplicantUpdateWithoutResumesInput, ApplicantUncheckedUpdateWithoutResumesInput>
    create: XOR<ApplicantCreateWithoutResumesInput, ApplicantUncheckedCreateWithoutResumesInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutResumesInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutResumesInput, ApplicantUncheckedUpdateWithoutResumesInput>
  }

  export type ApplicantUpdateWithoutResumesInput = {
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicantNestedInput
    applications?: JobApplicationUpdateManyWithoutApplicantNestedInput
    coverLetter?: CoverLetterUpdateManyWithoutApplicantNestedInput
    assessments?: AssessmentUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutResumesInput = {
    id?: IntFieldUpdateOperationsInput | number
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    coverLetter?: CoverLetterUncheckedUpdateManyWithoutApplicantNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantCreateWithoutCoverLetterInput = {
    biography?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    gender?: $Enums.Gender | null
    education?: $Enums.EducationLevel | null
    experience?: string | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicantInput
    applications?: JobApplicationCreateNestedManyWithoutApplicantInput
    resumes?: ResumeCreateNestedManyWithoutApplicantInput
    assessments?: AssessmentCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantUncheckedCreateWithoutCoverLetterInput = {
    id: number
    biography?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    gender?: $Enums.Gender | null
    education?: $Enums.EducationLevel | null
    experience?: string | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutApplicantInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutApplicantInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantCreateOrConnectWithoutCoverLetterInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutCoverLetterInput, ApplicantUncheckedCreateWithoutCoverLetterInput>
  }

  export type ApplicantUpsertWithoutCoverLetterInput = {
    update: XOR<ApplicantUpdateWithoutCoverLetterInput, ApplicantUncheckedUpdateWithoutCoverLetterInput>
    create: XOR<ApplicantCreateWithoutCoverLetterInput, ApplicantUncheckedCreateWithoutCoverLetterInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutCoverLetterInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutCoverLetterInput, ApplicantUncheckedUpdateWithoutCoverLetterInput>
  }

  export type ApplicantUpdateWithoutCoverLetterInput = {
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicantNestedInput
    applications?: JobApplicationUpdateManyWithoutApplicantNestedInput
    resumes?: ResumeUpdateManyWithoutApplicantNestedInput
    assessments?: AssessmentUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutCoverLetterInput = {
    id?: IntFieldUpdateOperationsInput | number
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutApplicantNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantCreateWithoutAssessmentsInput = {
    biography?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    gender?: $Enums.Gender | null
    education?: $Enums.EducationLevel | null
    experience?: string | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicantInput
    applications?: JobApplicationCreateNestedManyWithoutApplicantInput
    resumes?: ResumeCreateNestedManyWithoutApplicantInput
    coverLetter?: CoverLetterCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantUncheckedCreateWithoutAssessmentsInput = {
    id: number
    biography?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    gender?: $Enums.Gender | null
    education?: $Enums.EducationLevel | null
    experience?: string | null
    websiteUrl?: string | null
    location?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutApplicantInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutApplicantInput
    coverLetter?: CoverLetterUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantCreateOrConnectWithoutAssessmentsInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutAssessmentsInput, ApplicantUncheckedCreateWithoutAssessmentsInput>
  }

  export type ApplicantUpsertWithoutAssessmentsInput = {
    update: XOR<ApplicantUpdateWithoutAssessmentsInput, ApplicantUncheckedUpdateWithoutAssessmentsInput>
    create: XOR<ApplicantCreateWithoutAssessmentsInput, ApplicantUncheckedCreateWithoutAssessmentsInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutAssessmentsInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutAssessmentsInput, ApplicantUncheckedUpdateWithoutAssessmentsInput>
  }

  export type ApplicantUpdateWithoutAssessmentsInput = {
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicantNestedInput
    applications?: JobApplicationUpdateManyWithoutApplicantNestedInput
    resumes?: ResumeUpdateManyWithoutApplicantNestedInput
    coverLetter?: CoverLetterUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutAssessmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    education?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutApplicantNestedInput
    coverLetter?: CoverLetterUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type SavedJobCreateManyUserInput = {
    id?: number
    jobId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    userAgent: string
    ip: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedJobUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutSavedJobsNestedInput
  }

  export type SavedJobUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedJobUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateManyEmployerInput = {
    id?: number
    title: string
    description: string
    tags?: string | null
    minSalary?: number | null
    maxSalary?: number | null
    salaryCurrency?: string | null
    salaryPeriod?: string | null
    location?: string | null
    jobType?: string | null
    workType?: string | null
    jobLevel?: string | null
    experience?: string | null
    minEducation?: string | null
    isFeatured?: boolean
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateWithoutEmployerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxSalary?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    jobLevel?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    minEducation?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUpdateManyWithoutJobNestedInput
    savedJobs?: SavedJobUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutEmployerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxSalary?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    jobLevel?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    minEducation?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutJobNestedInput
    savedJobs?: SavedJobUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutEmployerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    minSalary?: NullableIntFieldUpdateOperationsInput | number | null
    maxSalary?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    salaryPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    jobLevel?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    minEducation?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyApplicantInput = {
    id?: number
    jobId: number
    resumeId: number
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeCreateManyApplicantInput = {
    id?: number
    fileUrl: string
    fileName: string
    fileSize?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoverLetterCreateManyApplicantInput = {
    id?: number
    content: string
    jobDescription?: string | null
    companyName: string
    jobTitle: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentCreateManyApplicantInput = {
    id?: number
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    topic: string
    difficulty?: string | null
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateWithoutApplicantInput = {
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
    resume?: ResumeUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    resumeId?: IntFieldUpdateOperationsInput | number
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    resumeId?: IntFieldUpdateOperationsInput | number
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUpdateWithoutApplicantInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUpdateWithoutApplicantInput = {
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUpdateWithoutApplicantInput = {
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyJobInput = {
    id?: number
    applicantId: number
    resumeId: number
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedJobCreateManyJobInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateWithoutJobInput = {
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneRequiredWithoutApplicationsNestedInput
    resume?: ResumeUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    resumeId?: IntFieldUpdateOperationsInput | number
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    resumeId?: IntFieldUpdateOperationsInput | number
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedJobUpdateWithoutJobInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedJobsNestedInput
  }

  export type SavedJobUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedJobUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyResumeInput = {
    id?: number
    jobId: number
    applicantId: number
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateWithoutResumeInput = {
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneRequiredWithoutApplicationsNestedInput
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutResumeInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutResumeInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}