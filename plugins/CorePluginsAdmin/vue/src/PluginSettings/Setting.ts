/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

interface Setting {
  name: string;
  value: unknown;
  introduction?: string;
}

export default Setting;
