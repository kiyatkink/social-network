import { ProfileData } from 'entities/Profile';
import { ValidationErrors } from '../../types/ProfileSchema';

export function validationForm(profile: ProfileData) {
  const {
    first,
    lastname,
    age,
    city,
    username,
    avatar,
  } = profile
  const errors: Array<ValidationErrors> = []

  if (!first) {
    errors.push(ValidationErrors.EMPTY_FIRSTNAME)
  }

  if (!lastname) {
    errors.push(ValidationErrors.EMPTY_LASTNAME)
  }

  if (!Number.isInteger(age)) {
    errors.push(ValidationErrors.AGE_SHOULD_BE_INTEGER)
  }

  if (age === 0) {
    errors.push(ValidationErrors.AGE_SHOULD_BE_MORE_THAN_ZERO)
  }

  if (!city) {
    errors.push(ValidationErrors.EMPTY_CITY)
  }

  if (!username) {
    errors.push(ValidationErrors.EMPTY_USERNAME)
  }

  // eslint-disable-next-line
  const expUrl = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

  if (!avatar?.match(expUrl) && avatar !== '') {
    errors.push(ValidationErrors.AVATAR_SHOULD_BE_URL)
  }

  return errors
}
