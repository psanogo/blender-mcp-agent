
export const signTransaction = async (unsignedTransaction) => {
  /* Check if Alice and Bob have both approved the transaction
  For this example, we're checking if their encrypted keys are available.
  We use Promise.all to ensure both downloads complete successfully. */
  const [encryptedKey1Buffer, encryptedKey2Buffer] = await Promise.all([
    downloadIntoMemory(encryptedKeyFile1),
    downloadIntoMemory(encryptedKeyFile2),
  ]);

  // For each key share, make a call to KMS to decrypt the key
  const [privateKeyshare1, privateKeyshare2] = await Promise.all([
    decryptSymmetric(encryptedKey1Buffer[0]),
    decryptSymmetric(encryptedKey2Buffer[0]),
  ]);

  /* Perform the MPC calculations
  In this example, we're combining the private key shares

