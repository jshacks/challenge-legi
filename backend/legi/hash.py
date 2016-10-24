import hashlib


def chunks(file, blocksize=65536):
    while True:
        data = file.read(blocksize)
        if not data:
            return
        yield data


def file_sha1(opened_file):
    """Calculates the SHA1 hex digest of an file opened with 'rb'."""

    sha1 = hashlib.sha1()
    for data in chunks(opened_file):
        sha1.update(data)
    return sha1.hexdigest()


def bytes_sha1(b):
    """Calculates the SHA1 hex digest of a byte string."""

    sha1 = hashlib.sha1()
    sha1.update(b)
    return sha1.hexdigest()


def str_sha1(str):
    """Calculates the SHA1 hex digest of a unicode string."""

    return bytes_sha1(bytes(str, encoding='latin1', errors='replace'))


def dict_sha1(d):
    """Calculates the SHA1 hex digest of a dict,
    by converting it to frozendict and stringifying it."""

    # TODO: check this implementation across multiple python
    #       versions, probably won't work as expected.
    # TODO: re-implement this by sorting keys and updating
    #       the digest on them (and the values) in that order.

    if not d:
        return str_sha1(str(frozenset()))
    return str_sha1(str(frozenset(d.items())))
