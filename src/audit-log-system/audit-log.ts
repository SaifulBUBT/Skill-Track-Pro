interface EventBase {
    timestamp: Date;
    actorId: string;
}

interface AuthEvent extends EventBase {
    email: string;
    ipAddress: string;
    loginMethod: string;
}

interface FinanceEvent extends EventBase {
    transactionId: string;
    amount: number;
    currency: string;
}

interface AuditLog<EventDetails extends EventBase> {
    eventType: string;
    details: EventDetails;
}

class AuditLogger {

    logEvent<E extends EventBase>(event: AuditLog<E>): void {
        console.log("Audit event: ", event);
    }
}


const authLog: AuditLog<AuthEvent> = {
    eventType: "UserLogin",
    details: {
        timestamp: new Date(),
        actorId: "user123",
        email: "test@gmail.com",
        ipAddress: "192.168.0.1",
        loginMethod: "Google"
    }
};    

const logger = new AuditLogger();
logger.logEvent(authLog)

/******-----**** */
const financeLog: AuditLog<FinanceEvent> = {
    eventType: "Payment_Completed",
    details: {
        timestamp: new Date(),
        actorId: "user456",
        transactionId: "txn789",
        amount: 100.50,
        currency: "USD"
    }
}

const financeLogger = new AuditLogger();
financeLogger.logEvent(financeLog);


/********======== */
const invalidLog: AuditLog<AuthEvent> = { 
    eventType: "User_Lgoin",
    details: {
        timestamp: new Date(),
        email: "example@gmail.com",
        ipAddress: "192.168.1.1",
        loginMethod: "Facebook"
    }
}

const invalidLogger = new AuditLogger();
invalidLogger.logEvent(invalidLog);