from app.models.Document import Document


def makeEngineeringDocuments() -> list[Document]:
    return [
        Document(
            id="doc_eng_01",
            title="User Data Deletion and Audit Ledger Runbook",
            content="When processing GDPR right to erasure requests, delete all personally identifiable data from authentication records. Financial records including invoice line items, tax statements, and transaction logs must be retained in an anonymized ledger to fulfill statutory audit obligations.",
            department="Engineering",
        ),
        Document(
            id="doc_eng_02",
            title="PostgreSQL Database Connection Pooling Guide",
            content="Configure PgBouncer with transaction pooling to handle incoming traffic spikes. Keep maximum client connections at five hundred and set idle connection timeout to sixty seconds.",
            department="Engineering",
        ),
        Document(
            id="doc_eng_03",
            title="JSON Web Token Authentication and Key Rotation",
            content="Rotate asymmetric signing keys every thirty days. Public keys must be published at the well-known keys endpoint for automated signature verification across internal microservices.",
            department="Engineering",
        ),
    ]


def makeLegalDocuments() -> list[Document]:
    return [
        Document(
            id="doc_legal_01",
            title="General Data Protection Regulation Compliance Policy",
            content="Under Article seventeen, data subjects have the right to obtain erasure of personal data without undue delay. The controller must erase personal data where the data is no longer necessary for the original purposes.",
            department="Legal",
        ),
        Document(
            id="doc_legal_02",
            title="Master Service Agreement and Liability Terms",
            content="Neither party shall be liable for indirect, incidental, or consequential damages. Maximum aggregate liability under this agreement is strictly capped at the total fees paid during the preceding twelve months.",
            department="Legal",
        ),
    ]


def makeFinanceDocuments() -> list[Document]:
    return [
        Document(
            id="doc_finance_01",
            title="Customer Billing History and Invoice Retention Requirements",
            content="All customer invoices and transaction records must be archived for seven calendar years to satisfy international financial reporting and corporate audit requirements. Deletion of confirmed revenue records is prohibited.",
            department="Finance",
        ),
        Document(
            id="doc_finance_02",
            title="Automated Subscription Refund Evaluation Procedure",
            content="Customers requesting a refund within fourteen days of subscription start are eligible for immediate full reimbursement if usage remains below ten percent of quota.",
            department="Finance",
        ),
    ]


def getSampleDocuments() -> list[Document]:
    return (
        makeEngineeringDocuments()
        + makeLegalDocuments()
        + makeFinanceDocuments()
    )
