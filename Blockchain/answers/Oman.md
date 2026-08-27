Oman - Workflow: Degree issuance and on-chain recording 

The process of degree issuance starts when a student successfully completes all requirements for their degree and the University's examination board approves the issuance for their degree. Once this is successful, the UoM examinations office generates a digital credential for the student. The credential contains important academic data such as name, student id, programme of study, date awarded, credential id and institution. 

![Degree issuance workflow](Blockchain/diagrams/degree-workflow.png)

To ensure authenticity and prevent risk of falsified documents, the credential is digitally signed using the private key of the university. The private key acts as the digital signature of the university and also as proof that it was issued by UoM. Any other institution or employer can later verify the authenticity using the university's public key.

After the credential has been signed, it is hashed using the SHA-256 hash function. The hash generated acts as a unique id of the credential. Because of the deterministic and collision-resistant properties of SHA-256, even a small value modification to the credential would produce a completely different hash value. This allows tampering attempts to be easily detected and ensures integrity of the credential throughout its lifecycle (NIST, 2015).

In order to ensure student privacy and to comply with data protection regulations, the student's information and credential are stored off chain in a secure separate database. Thus, data such as names, Ids and dates are not stored directly on the blockchain. Storing sensitive data off-chain while recording only cryptographic proofs on-chain is a widely adopted approach to balance privacy, scalability and security in blockchain-based systems (Zyskind et al., 2015; Hyperledger Foundation, 2024).

Therefore, the University Of Mauritius will only store a small amount of verification information on the permissioned Hyperledger Fabric consortium blockchain. Only the credential ID, the SHA-256 hash, the issuing institution (University of Mauritius) and a timestamp is stored. When the transaction is sent to the network, nodes will verify the validity and reach consensus and then record it on the blockchain. After this, the transaction will be permanently recorded on the blockchain network and it cannot be changed. By storing sensitive data off chain and storing only verification data on chain, the University of Mauritius will be able to ensure transparency, privacy and data security. This will also help other institutions or companies verify credentials efficiently and transparently (Androulaki et al., 2018; Hyperledger Foundation, 2024).

Androulaki, E., Barger, A., Bortnikov, V., Cachin, C., Christidis, K., De Caro, A., Enyeart, D., Ferris, C., Laventman, G., Manevich, Y., Muralidharan, S., Murthy, C., Nguyen, B., Sethi, M., Singh, G., Smith, K., Sorniotti, A., Stathakopoulou, C., Vukolić, M., Cocco, S.W. and Yellick, J. (2018) ‘Hyperledger Fabric: A Distributed Operating System for Permissioned Blockchains’, Proceedings of the Thirteenth EuroSys Conference, pp. 1–15.

Hyperledger Foundation (2024) Hyperledger Fabric Documentation. Available at: https://hyperledger-fabric.readthedocs.io (Accessed: 27 August 2026).

NIST (2015) Secure Hash Standard (SHS), FIPS PUB 180-4. Gaithersburg, MD: National Institute of Standards and Technology.

Zyskind, G., Nathan, O. and Pentland, A. (2015) ‘Decentralizing Privacy: Using Blockchain to Protect Personal Data’, IEEE Security and Privacy Workshops, pp. 180–184.

